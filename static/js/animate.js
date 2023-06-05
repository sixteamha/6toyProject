const sun = $(".sun");
let degree = 0;
class rotationEvent {
  constructor(radius, target, speed, parent, center) {
    this.radius = radius;
    this.target = target;
    this.speed = speed;
    this.parent = parent;
    this.center = center;
    requestAnimationFrame(this.loop);
  }
  loop = () => {
    const parentCenterX = this.parent.offset().left + this.parent.width() / 2;
    const parentCenterY = this.parent.offset().top + this.parent.height() / 2;
    const rotation = (degree * Math.PI) / 180;
    const targetX =
      parentCenterX - this.center + this.radius * Math.cos(rotation);
    const targetY =
      parentCenterY - this.center + this.radius * Math.sin(rotation);

    this.target.css("left", targetX + "px");
    this.target.css("top", targetY + "px");

    degree += this.speed;

    requestAnimationFrame(this.loop);
  };
}

const moveMoonEvent = new rotationEvent(100, $(".moon"), 0.5, $(".earth"), 18);
moveMoonEvent.loop();
const moveEarthEvent = new rotationEvent(250, $(".earth"), 0.05, $(".sun"), 50);
moveEarthEvent.loop();
