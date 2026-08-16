package com.example.car_rental.controller;

import com.example.car_rental.entity.Booking;
import com.example.car_rental.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/booking")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public Booking bookCar(@RequestBody Booking booking) {
        return bookingService.bookcar(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }
}
