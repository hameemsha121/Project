package com.cts.training.dao;

import java.util.List;

import com.cts.training.model.UserEntity;

public interface UserDAO {

	public boolean addUser(UserEntity user);

	public boolean updateUser(UserEntity user);

	public boolean deleteUser(UserEntity user);

	public UserEntity getUserById(int id);

	public List<UserEntity> getAllUsers();
	
	public boolean validateUser(String username, String password);
}
