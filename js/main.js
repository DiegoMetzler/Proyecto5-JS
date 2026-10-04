// Simulador de Productos

// CLASE Producto
class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    // Aplicar descuento
    aplicarDescuento(porcentaje) {
        const descuento = this.precio * (porcentaje / 100);
        this.precio = this.precio - descuento;
        console.log(`✅ Descuento del ${porcentaje}% aplicado a "${this.nombre}". Nuevo precio: $${this.precio}`);
    }

    // Vender
    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`✅ Se vendieron ${cantidad} unidades de "${this.nombre}". Stock restante: ${this.stock}`);
        } else {
            console.log(`❌ Stock insuficiente de "${this.nombre}". Stock disponible: ${this.stock}`);
        }
    }

    // Mostrar información del producto
    mostrarInfo() {
        console.log(`📦 Producto: ${this.nombre} | Precio: $${this.precio} | Stock: ${this.stock}`);
    }
}

// INSTANCIACIÓN - 3 productos con new
const pinturaNegra = new Producto(1, "Pintura Negra", 6000, 50);
const pincelFino = new Producto(2, "Pincel Fino", 1500, 100);
const rodilloEstandar = new Producto(3, "Rodillo Estándar", 3000, 30);

// Array de productos
const catalogo = [pinturaNegra, pincelFino, rodilloEstandar];

// Mostrar catálogo inicial
console.log("--- CATÁLOGO INICIAL ---");
for (const producto of catalogo) {
    producto.mostrarInfo();
}

// Aplicar descuento a un producto
console.log("\n--- APLICANDO DESCUENTOS ---");
pinturaNegra.aplicarDescuento(10);
pincelFino.aplicarDescuento(15);

// Vender productos
console.log("\n--- VENTAS ---");
rodilloEstandar.vender(5);
pinturaNegra.vender(100); 

// Mostrar catálogo final
console.log("\n--- CATÁLOGO FINAL ---");
for (const producto of catalogo) {
    producto.mostrarInfo();
}