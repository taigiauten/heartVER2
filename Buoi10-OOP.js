class Circle {
    constructor(radius, color) {
        this.radius = radius
        this.color = color
    }

    getRadius() {
        return this.radius
    }

    getArea() {
        return (this.radius * this.radius * Math.PI).toFixed(2)
    }
}

let itc = new Circle(2, 'xanh')
console.log('giá trị radius của đối tượng', itc.getRadius())
console.log('giá trị diện tích (getArea()) của đối tượng.', itc.getArea())

class Cylinder extends Circle {
    constructor(height, radius, color) {
        super(radius, color)
        this.height = height
    }

    getHeight() {
        return this.height
    }

    getVollume() {
        return this.getArea * this.height
    }
}

let cld = new Cylinder(3, 3, 'xanh')
console.log('lấy ra giá trị thuộc tính height của lớp.', cld.getHeight())
console.log('tính thể tích hình (getArea() * height).', cld.getVollume())
console.log(cld.radius)
console.log(cld.color)
