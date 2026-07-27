package com.ecommerce.backend;
// ya agar jarurat ho toh isko hata kar direct bina package ke bhi chhod sakti hain, lekin agar ye pehle se chal raha hai toh isko chune ki zaroorat nahi hai.

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
