package com.doc.dao;


import org.springframework.data.repository.CrudRepository;

import com.doc.bean.Doctor;

	public interface DoctorDAO extends CrudRepository<Doctor, Integer> {
	}
