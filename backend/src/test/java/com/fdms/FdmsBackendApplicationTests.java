package com.fdms;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
    "spring.datasource.url=jdbc:postgresql://localhost:5432/testdb",
    "spring.jpa.hibernate.ddl-auto=none"
})
class FdmsBackendApplicationTests {

    @Test
    void contextLoads() {
        // Basic smoke test placeholder
    }

}
