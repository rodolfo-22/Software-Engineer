package gm.serverEcommer.services;

import gm.serverEcommer.modelo.Producto;
import gm.serverEcommer.repository.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService implements IProductoService {

    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Override
    public List<Producto> getProductos() {
        return this.productoRepositorio.findAll();
    }

    @Override
    public Producto buscarProductoPorId(Integer idProducto) {
        Producto producto =
                this.productoRepositorio.findById(idProducto).orElse(null);
                return producto;
    }

    @Override
    public Producto guardarProducto(Producto producto) {
         return this.productoRepositorio.save(producto);
    }

    @Override
    public void eliminarProductoPotId(Integer idProducto) {
        this.productoRepositorio.deleteById(idProducto);
    }
}
