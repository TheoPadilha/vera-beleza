import React, { useEffect, useRef } from "react";
import Sketch from "react-p5";

const PhysicsCanvas = () => {
  const leavesRef = useRef([]); // Guarda as folhas, apenas uma vez.
  const imagesRef = useRef([]);
  const imagePaths = [
    "/bg-folha (1).png",
    "/bg-folha2.png",
    "/bg-folha3.png",
    "/bg-folha4.png",
    "/bg-folha5.png",
    "/bg-folha6.png",
    "/bg-folha7.png",
    "/bg-folha8.png",
    "/bg-folha9.png",
  ];

  const preload = (p5) => {
    imagesRef.current = imagePaths.map((path) => p5.loadImage(path));
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    // Posições fixas para as folhas
    const isMobile = p5.windowWidth < 768;

    const leafPositions = isMobile
      ? [
        { x: 80, y: 100 },
        { x: 200, y: 220 },
        { x: 100, y: 350 },
        { x: 250, y: 450 },
        { x: 180, y: 600 },
        { x: 50, y: 500 },
        { x: 300, y: 320 },
        { x: 130, y: 180 },
        { x: 220, y: 80 },
        ]
      : [
          { x: 650, y: 850 },
          { x: 1750, y: 250 },
          { x: 550, y: 450 },
          { x: 930, y: 200 },
          { x: 1100, y: 700 },
          { x: 170, y: 600 },
          { x: 1400, y: 350 },
          { x: 230, y: 100 },
          { x: 2000, y: 700 },
        ];

    // Garantir que as folhas não sejam duplicadas
    if (leavesRef.current.length === 0) {
      // Embaralha as imagens antes de associar
      const shuffledImages = [...imagesRef.current].sort(
        () => Math.random() - 0.5
      );

      leafPositions.forEach((pos, index) => {
        // Usa uma imagem única para cada folha
        leavesRef.current.push(
          new Leaf(pos.x, pos.y, p5, shuffledImages[index])
        );
      });

      setTimeout(() => {
        leavesRef.current.forEach((leaf) => {
          leaf.startReturning();
        });
      }, 1000);
    }
  };

  const draw = (p5) => {
    p5.clear();
    leavesRef.current.forEach((leaf) => {
      leaf.update(p5.mouseX, p5.mouseY);
      leaf.display(p5);
    });
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      leavesRef.current.forEach((leaf) => leaf.toggleReturn());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  class Leaf {
    constructor(x, y, p5, images) {
      this.p5 = p5;
      this.initialPos = p5.createVector(x, y);
      this.pos = this.initialPos.copy();
      this.vel = p5.createVector(0, 0);
      this.acc = p5.createVector(0, 0);
      this.size = p5.windowWidth < 768 ? 60 : p5.random(124, 125);

      this.img = images;
      this.shouldReturn = false;
    }

    toggleReturn() {
      this.shouldReturn = !this.shouldReturn;
    }

    applyForce(force) {
      this.acc.add(force);
    }

    startReturning() {
      this.shouldReturn = true;
    }

    update(mouseX, mouseY) {
      const mouse = this.p5.createVector(mouseX, mouseY);
      const dirToMouse = p5.Vector.sub(this.pos, mouse);
      const dMouse = dirToMouse.mag();

      if (dMouse < 150) {
        dirToMouse.setMag(0.7);
        this.applyForce(dirToMouse);
      }

      if (this.shouldReturn) {
        const toInitial = p5.Vector.sub(this.initialPos, this.pos);
        const distance = toInitial.mag();

        if (distance > 2) {
          toInitial.mult(0.003);
          this.applyForce(toInitial);
        } else {
          this.shouldReturn = false;
          this.pos = this.initialPos.copy();
          this.vel.mult(0);
        }
      }

      this.vel.add(this.acc);
      this.pos.add(this.vel);

      this.pos.x = this.p5.constrain(
        this.pos.x,
        this.size / 2,
        this.p5.width - this.size / 2
      );
      this.pos.y = this.p5.constrain(
        this.pos.y,
        this.size / 2,
        this.p5.height - this.size / 2
      );

      this.vel.mult(0.95);
      this.acc.mult(0);
    }

    display(p5) {
      p5.imageMode(p5.CENTER);
      p5.image(this.img, this.pos.x, this.pos.y, this.size, this.size);
    }
  }

  return (
    <div style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
      <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        windowResized={windowResized}
      />
    </div>
  );
};

export default PhysicsCanvas;
