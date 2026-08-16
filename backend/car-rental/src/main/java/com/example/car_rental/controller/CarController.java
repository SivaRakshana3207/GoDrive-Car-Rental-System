package com.example.car_rental.controller;

import com.example.car_rental.entity.Car;
import com.example.car_rental.service.CarService;

import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Car addCar(
            @RequestParam("carName") String carName,
            @RequestParam("seats") int seats,
            @RequestParam("place") String place,
            @RequestParam("price") int price,
            @RequestParam("booked") boolean booked,
            @RequestParam("image") MultipartFile imageFile
    ) throws IOException {

        Car car = new Car();
        car.setCarName(carName);
        car.setSeats(seats);
        car.setPlace(place);
        car.setPrice(price);
        car.setBooked(booked);

        return carService.addCar(car, imageFile);
    }

}