package com.example.car_rental.service;

import com.example.car_rental.entity.Car;
import com.example.car_rental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    private static final String UPLOAD_DIR = System.getProperty("user.dir") + File.separator + "backend" + File.separator + "car-rental" + File.separator + "uploads" + File.separator;

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarById(Long id) {
        return carRepository.findById(id).orElse(null);
    }

    public Car addCar(Car car, MultipartFile imageFile) throws IOException {
        File dir = new File(UPLOAD_DIR);
        if (!dir.exists()) {
            dir.mkdirs();
        }

        String fileName = UUID.randomUUID() + "_" + imageFile.getOriginalFilename();

        File destination = new File(dir, fileName);
        System.out.println("Saving image to: " + destination.getAbsolutePath());
        imageFile.transferTo(destination);
        
        car.setImage(fileName);
        return carRepository.save(car);
    }
}