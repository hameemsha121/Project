package com.cts.training.userservice;

import java.util.List;

public interface UserService {

	public List<UserDTO> getAllUsers();

	public UserDTO insert(UserDTO pd);

	public UserDTO update(UserDTO pd);

	public UserDTO getUserById(int id);

	public void delete(int id);

	String activate(String email);

	public UserDTO getUserByUsernameAndPassword(String username, String password);

}
