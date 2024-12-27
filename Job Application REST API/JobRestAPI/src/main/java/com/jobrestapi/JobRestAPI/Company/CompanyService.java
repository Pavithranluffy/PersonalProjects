package com.jobrestapi.JobRestAPI.Company;


import org.springframework.stereotype.Service;

import java.util.List;


public interface CompanyService {


    Company GetCompanybyid(Long id );


    boolean DeleteCompanyByid(Long id);

    List<Company> GetCompany();


    boolean addCompany(Company company);

    boolean updateJobbyid(Long id, Company company);
}
