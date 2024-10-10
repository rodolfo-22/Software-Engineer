package gm.serverEcommer.services;

import gm.serverEcommer.modelo.Producto;

import java.util.List;

public interface IProductoService {
    public List<Producto> getProductos();
    public Producto buscarProductoPorId(Integer idProducto);
    public Producto guardarProducto(Producto producto);
    public void eliminarProductoPotId(Integer idProducto);

}
