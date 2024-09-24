package com.example.aws.port.adapters.backoffice.resource;

import com.example.aws.domain.Product;
import com.example.aws.port.adapters.persistence.PostgresqlProducts;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductResource {

    private final PostgresqlProducts postgresqlProducts;

    public ProductResource(PostgresqlProducts postgresqlProducts) {
        this.postgresqlProducts = postgresqlProducts;
    }

    @PostMapping("/api/products")
    public void save(@RequestBody Product product){
        postgresqlProducts.save(product);
    }

    @GetMapping("/api/products")
    public List<Product> all(){
        return postgresqlProducts.all();
    }

}
