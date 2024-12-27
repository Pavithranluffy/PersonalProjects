package com.jobrestapi.JobRestAPI.Company;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {

    @Autowired
    CompanyService companyService;


    @GetMapping
    public ResponseEntity<List<Company>> GetCompany(){
        List<Company> company= companyService.GetCompany();
        return  new ResponseEntity<>(company,HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> DeleteCompanyBYID(@PathVariable Long id){
        if(companyService.DeleteCompanyByid(id)){
            return new ResponseEntity<>("Job Deleted SuccessFully",HttpStatus.OK);
        }
        else{
            return  new ResponseEntity<>("Job Deletion Error",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{id}")
    public ResponseEntity<String> UpdateJob(@PathVariable Long id ,@RequestBody Company company){
        if(companyService.updateJobbyid(id,company)
        ){
            return  new ResponseEntity<>("Job Updated SuccesFully",HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Job Not Updated ..Not Fount",HttpStatus.NOT_FOUND);

        }
    }



    @GetMapping("/{id}")
    public ResponseEntity<Company> GetCompanyById(@PathVariable Long id ){
        try {
            Company company = companyService.GetCompanybyid(id);
            return new ResponseEntity<>(company,HttpStatus.OK) ;
        } catch (Exception e) {
           return  new ResponseEntity<>(new Company(),HttpStatus.NOT_FOUND);
        }


    }

    @PostMapping
    public ResponseEntity<String> AddCompany(@RequestBody Company company){
        if(companyService.addCompany(company)){
            return new ResponseEntity<>("Job Added Succesfully", HttpStatus.OK);

        }
        else{
            return  new ResponseEntity<>("Job Not Addded ",HttpStatus.NOT_FOUND);
        }
    }
}
