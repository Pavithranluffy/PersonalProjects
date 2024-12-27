package com.jobrestapi.JobRestAPI.Company.Imp;

import com.jobrestapi.JobRestAPI.Company.Company;
import com.jobrestapi.JobRestAPI.Company.CompanyRepository;
import com.jobrestapi.JobRestAPI.Company.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyImplemenation implements CompanyService {


    @Autowired
    CompanyRepository companyRepository;


    @Override
    public Company GetCompanybyid(Long id) {
        return companyRepository.findById(id).orElse(null);
    }

    @Override
    public boolean DeleteCompanyByid(Long id) {
        try{
            companyRepository.deleteById(id);
            return  true;
        } catch (Exception e) {
          return  false;
        }
    }

    @Override
    public List<Company> GetCompany() {
        return companyRepository.findAll();
    }

    @Override
    public boolean addCompany(Company company) {
        try {
            companyRepository.save(company);
            return  true;
        } catch (Exception e) {
          return false;
        }
    }

    @Override
    public boolean updateJobbyid(Long id, Company company) {
        Optional<Company> optionalCompany = companyRepository.findById(id);
        if(optionalCompany.isPresent()){
            Company company1 = optionalCompany.get();
            company1.setCompanyName(company.getCompanyName());
            company1.setNoOfEmployees(company.getNoOfEmployees());
            company1.setNoofAvailablePositions(company.getNoofAvailablePositions());
            company1.setCompanyAddress(company.getCompanyAddress());
            company1.setCompanyEmail(company.getCompanyEmail());
            companyRepository.save(company1);
            return true;
        }

        else {
            return false;
        }
    }
}
