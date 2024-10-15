package com.doc.test;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.doc.bean.Doctor;
import com.doc.controller.DOCController;
import com.doc.dao.DoctorDAO;
import static org.junit.Assert.*;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.test.annotation.Rollback;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;

@SpringBootApplication
public class DoctorTest {
	
	private DOCController controller;
	private Doctor doctor;
	private DoctorDAO doctordao;
	
	
    @Test
    @Order(1)
    @Rollback(value = false)
    public void testPerformInsert(){

        		Doctor obj=new Doctor();
		obj.setdId(1);
		obj.setdName("raja");
		obj.setdAge(23);
		obj.setdEmail("raja@gmail.com");
	    obj.setdSpecialization("Baby");
	    obj.setdPhno(678976);
	    obj.setdLocation("chennai");
	    obj=controller.performInsert(doctor);
	    org.junit.Assert.assertEquals(obj, doctor);
    }


@After
@Order(2)
@Rollback(value = false)
public void testPerformUpdate(){

    		Doctor obj=new Doctor();
	obj.setdId(1);
	obj.setdName("kannan");
	obj.setdAge(23);
	obj.setdEmail("kannan@gmail.com");
    obj.setdSpecialization("Baby");
    obj.setdPhno(678976);
    obj.setdLocation("chennai");
    obj=controller.performInsert(doctor);
    org.junit.Assert.assertEquals(obj, doctor);
}

@Test
@Order(3)
@Rollback(value = false)
public void testPeformDelete(){

	Doctor obj=new Doctor();
    Doctor doctor = null;

    Optional<Doctor> optionalDoctor = doctor();

    if(optionalDoctor.isPresent()){
    	doctor = optionalDoctor.get();
    }
    Assertions.assertThat(doctor).isNull();
}
@Test
@Order(4)
public void testPeformGetId(){

	Doctor obj=new Doctor();

    Assertions.assertThat(obj.getdId()).isEqualTo(1L);

}
@Test
@Order(5)
public void getListOfDoctorTest(){

	List<Doctor> list = new ArrayList<Doctor>();
    Assertions.assertThat(list.size()).isGreaterThan(0);

}
private Optional<Doctor> doctor() {
	// TODO Auto-generated method stub
	return null;
}
}
