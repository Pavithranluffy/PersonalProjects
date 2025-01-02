package com.jobrestapi.JobRestAPI.Review;


import jakarta.persistence.*;

@Entity
@Table(name = "Review_table")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Companyid;
    private String Review_descritpion;
    private String Review_rating;
    private String Review_date;

    public Long getCompanyid() {
        return Companyid;
    }

    public void setCompanyid(Long companyid) {
        Companyid = companyid;
    }

    public String getReview_descritpion() {
        return Review_descritpion;
    }

    public void setReview_descritpion(String review_descritpion) {
        Review_descritpion = review_descritpion;
    }

    public String getReview_rating() {
        return Review_rating;
    }

    public void setReview_rating(String review_rating) {
        Review_rating = review_rating;
    }

    public String getReview_date() {
        return Review_date;
    }

    public void setReview_date(String review_date) {
        Review_date = review_date;
    }

    public Review() {
    }

    public Review(Long companyid, String review_descritpion, String review_rating, String review_date) {
        Companyid = companyid;
        Review_descritpion = review_descritpion;
        Review_rating = review_rating;
        Review_date = review_date;
    }
}
