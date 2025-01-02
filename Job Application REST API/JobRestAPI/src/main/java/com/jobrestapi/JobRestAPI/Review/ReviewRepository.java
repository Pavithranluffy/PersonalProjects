package com.jobrestapi.JobRestAPI.Review;

import com.jobrestapi.JobRestAPI.Company.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Company,Long> {
}
