package com.cts.training.userservice;

public class UserDTO {

	Integer id;
	String email;
	long phone;
	String username;
	String password;
	boolean admin=false;
	boolean confirmed=false;
	
	
	public UserDTO() {
		
	}

	public UserDTO(Integer id, String email, long phone, String username, String password, boolean admin,
			boolean confirmed) {
		super();
		this.id = id;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
		this.admin = admin;
		this.confirmed = confirmed;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public boolean isConfirmed() {
		return confirmed;
	}

	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}

	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", email=" + email + ", phone=" + phone + ", username=" + username + ", password="
				+ password + ", admin=" + admin + ", confirmed=" + confirmed + "]";
	}

	
	
}
