package com.cts.training.userservice;


import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.data.annotation.Transient;

@Entity
@Table(name="StockUser")
@XmlRootElement(name="reg")
public class User implements Serializable{
	
	
	private static final long serialVersionUID = 7317015361006830435L;
	
	@Id
	@GeneratedValue
	Integer id;
	String email;
	long phone;
	String username;
	String password;
	boolean admin=false;
	boolean confirmed=false;
    String role="ROLE_USER";
	

	public User()
	{
		
	}


	public User(Integer id, String email, long phone, String username, String password, boolean admin,
			boolean confirmed, String role) {
		super();
		this.id = id;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
		this.admin = admin;
		this.confirmed = confirmed;
		this.role = role;
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


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", phone=" + phone + ", username=" + username + ", password="
				+ password + ", admin=" + admin + ", confirmed=" + confirmed + ", role=" + role + "]";
	}


	
}
