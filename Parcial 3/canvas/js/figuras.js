class Figura{
    constructor(posicionCursor={}, colorRelleno="red", colorBorde="black", grosorBorde=2){
        this.x = Math.min(posicionCursor.iniciales.x, posicionCursor.finales.x);
        this.y = Math.min(posicionCursor.iniciales.y, posicionCursor.finales.y);
        this.alto = Math.abs(posicionCursor.finales.y - posicionCursor.iniciales.y);
        this.ancho = Math.abs(posicionCursor.finales.x - posicionCursor.iniciales.x);
        this.colorRelleno = colorRelleno;
        this.colorBorde = colorBorde;
        this.grosorBorde = grosorBorde;
    }
}

export class Cuadrado extends Figura{
   Dibujar(ctx){

    ctx.beginPath();
    ctx.fillStyle = this.colorRelleno;
    ctx.strokeStyle = this.colorBorde;
    ctx.lineWidth = this.grosorBorde;

    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    ctx.strokeRect(this.x, this.y, this.ancho, this.alto);

   }
}

export class Circulo extends Figura{
    Dibujar(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.colorRelleno;
        ctx.strokeStyle = this.colorBorde;
        ctx.lineWidth = this.grosorBorde;

        ctx.arc(this.x + this.ancho/2, this.y + this.alto/2, this.ancho/2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
}
