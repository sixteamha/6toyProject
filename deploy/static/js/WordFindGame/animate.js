class Plant {
  constructor(plantInfo, speed, degree) {
    this.plantInfo = plantInfo;
    this.speed = speed;
    this.degree = degree;
  }
}

class rotationEvent extends Plant {
  constructor(plantInfo, parent, distance) {
    super(plantInfo);
    this.parent = parent;
    this.distance = distance;
    requestAnimationFrame(this.loop);
  }

  loop = () => {
    const parentCenterX = this.parent.offset().left + this.parent.width() / 2;
    const parentCenterY = this.parent.offset().top + this.parent.height() / 2;
    const rotation = (this.plantInfo.degree * Math.PI) / 180;
    const targetX = parentCenterX - 10 + this.distance * Math.cos(rotation);
    const targetY = parentCenterY - 10 + this.distance * Math.sin(rotation);

    this.plantInfo.plantInfo.css("left", targetX + "px");
    this.plantInfo.plantInfo.css("top", targetY + "px");
    this.plantInfo.degree += this.plantInfo.speed;

    requestAnimationFrame(this.loop);
  };
}

const earth = new Plant($(".earth"), 0.3, 200);
const earthRotateEvent = new rotationEvent(earth, $(".sun"), 120);
earthRotateEvent.loop();
const moon = new Plant($(".moon"), 1, 300);
const moonRotateEvent = new rotationEvent(moon, $(".earth"), 50);
moonRotateEvent.loop();
const mars = new Plant($(".mars"), 0.3, 100);
const marsRotateEvent = new rotationEvent(mars, $(".sun"), 120);
marsRotateEvent.loop();
