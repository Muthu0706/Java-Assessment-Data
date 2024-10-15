package com.doc.controller;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.doc.dao.DoctorDAO;
import com.doc.bean.Doctor;
@RestController
@CrossOrigin("http://localhost:4200/")
public class DOCController {


	@Autowired
	DoctorDAO dao;

	@PostMapping("/PerformInsert")
	public Doctor performInsert(@RequestBody Doctor doc) {
		return dao.save(doc);
	}
	@PutMapping("/PerformUpdate")
	public void performUpdate(@RequestBody Doctor doc) {
		dao.save(doc);
	}
	@DeleteMapping("/PerformDelete/{dId}")
	public void performDelete(@PathVariable("dId") int id) {
		dao.deleteById(id);
	}
	@GetMapping("/viewAll")
	public List<Doctor> getAllDoctor() {
		System.out.println("Inside view All");
		Iterator<Doctor> it = dao.findAll().iterator();
		List<Doctor> list = new ArrayList<Doctor>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
}
