package com.jobrestapi.JobRestAPI.Review.Imp;

import com.jobrestapi.JobRestAPI.Company.Company;
import com.jobrestapi.JobRestAPI.Review.Review;
import com.jobrestapi.JobRestAPI.Review.ReviewRepository;
import com.jobrestapi.JobRestAPI.Review.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService {


    @Autowired
    ReviewRepository reviewRepository;
    @Override
    public Review getReviewById(Long id) {
     return null;
    }
}
