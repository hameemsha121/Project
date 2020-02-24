package com.cts.project.dao.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.bean.User;
import com.cts.project.dao.UserDAO;

@CrossOrigin(origins = "*")
@RestController
public class UserDAOImpl {

	@Autowired
	UserDAO userDao;

	@GetMapping("/user")
	public List<User> getUsers() {
		return userDao.findAll();
	}

	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable int id) {

		Optional<User> userList = userDao.findById(id);
		User user = userList.get();
		return user;

	}

	@PostMapping("/user")
	public User saveUser(@RequestBody User user) {
		User newUser = userDao.save(user);
		return newUser;
	}

	@DeleteMapping("/user/{id}")
	public void deleteUser(@PathVariable int id) {

		userDao.deleteById(id);
	}

	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		User updateuser = userDao.save(user);
		return updateuser;
	}

}
