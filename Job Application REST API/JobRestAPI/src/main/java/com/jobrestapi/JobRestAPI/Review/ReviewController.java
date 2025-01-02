package com.jobrestapi.JobRestAPI.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.annotation.Repeatable;

@RestController
@RequestMapping("/companies")
public class ReviewController {
    @Autowired
    ReviewService reviewService ;

    @GetMapping("/{id}/reiviews")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id ){
        Review data =  reviewService.getReviewById(id);
        if(data!=null){
            return new ResponseEntity<>(data,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(new Review(),HttpStatus.NOT_FOUND);
        }



    }
}
