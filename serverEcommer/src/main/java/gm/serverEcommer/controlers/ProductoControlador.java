package gm.serverEcommer.controlers;

import gm.serverEcommer.modelo.Producto;
import gm.serverEcommer.services.ProductoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:5173")
public class ProductoControlador {

    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);
    @Autowired
    private ProductoService productoService;
    //para obtener todos los productos de la base
    @GetMapping("/productos")
    public List<Producto> getProducts(){
        List<Producto> productos = this.productoService.getProductos();
        return productos;
    }
    //para crear un producto
    @PostMapping("/productos")
    public Producto createProduct(@RequestBody Producto producto){
        this.productoService.guardarProducto(producto);
        return producto;
    }
    //para obtener un producto por id
    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> getProduct(@PathVariable int id){
        Producto producto = this.productoService.buscarProductoPorId(id);
        if(producto != null)
            return ResponseEntity.ok(producto);
        else
            return ResponseEntity.notFound().build();
    }
    //para actukizar un campo de un producto ya creado
    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> updateProduct(@PathVariable int id, @RequestBody Producto productoRecibido){
        Producto producto = this.productoService.buscarProductoPorId(id);
        producto.setDescripcion(productoRecibido.getDescripcion());
        producto.setModel(productoRecibido.getModel());
        producto.setPrice(productoRecibido.getPrice());
        producto.setColor(productoRecibido.getColor());
        producto.setStock(productoRecibido.getStock());
        this.productoService.guardarProducto(producto);
        return ResponseEntity.ok(producto);
    }
    //para eliminar un prodcuto por id
    @DeleteMapping("/productos/{id}")
    public ResponseEntity<Producto> deleteProduct(@PathVariable int id){
        Producto producto = this.productoService.buscarProductoPorId(id);
        if(producto == null)
            return ResponseEntity.notFound().build();
        this.productoService.eliminarProductoPotId(producto.getIdProdcuto());
        return ResponseEntity.ok(producto);
    }

}
