package com.jobrestapi.JobRestAPI.Company;


import jakarta.persistence.*;

@Entity
@Table (name = "Company_table")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long companyId;
    private String companyName;
    private String noOfEmployees;

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getNoOfEmployees() {
        return noOfEmployees;
    }

    public void setNoOfEmployees(String noOfEmployees) {
        this.noOfEmployees = noOfEmployees;
    }

    public String getNoofAvailablePositions() {
        return noofAvailablePositions;
    }

    public void setNoofAvailablePositions(String noofAvailablePositions) {
        this.noofAvailablePositions = noofAvailablePositions;
    }

    public String getCompanyEmail() {
        return companyEmail;
    }

    public void setCompanyEmail(String companyEmail) {
        this.companyEmail = companyEmail;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    private String noofAvailablePositions;

    public Company(Long companyId, String companyName, String noOfEmployees, String noofAvailablePositions, String companyAddress, String companyEmail) {
        this.companyId = companyId;
        this.companyName = companyName;
        this.noOfEmployees = noOfEmployees;
        this.noofAvailablePositions = noofAvailablePositions;
        this.companyAddress = companyAddress;
        this.companyEmail = companyEmail;
    }

    private String companyEmail;
    private  String companyAddress;

    public Company() {
    }
}
