package com.example.car_rental.service;

import com.example.car_rental.entity.Booking;
import com.example.car_rental.entity.Car;
import com.example.car_rental.repository.BookingRepository;
import com.example.car_rental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private CarRepository carRepository;

    public List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }

    public Booking bookcar(Booking booking){
        Car car = carRepository.findById(booking.getCarID()).orElse(null);

        if(car==null){
            return null;
        }
        
        if(car.isBooked()){
            return null;
        }

        car.setBooked(true);
        carRepository.save(car);
        return bookingRepository.save(booking);
    }
}
