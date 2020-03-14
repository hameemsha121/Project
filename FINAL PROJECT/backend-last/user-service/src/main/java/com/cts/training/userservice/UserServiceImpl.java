package com.cts.training.userservice;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;




@Service
public class UserServiceImpl implements UserService{

	
	@Autowired
	UserDAO userDao;
	
	@Autowired
	JavaMailSender jms;
	
	@Override
	public UserDTO insert(UserDTO ud) {
		User u=new User();
		
		try {
			MimeMessage mimeMessage=jms.createMimeMessage();
			MimeMessageHelper helper=new MimeMessageHelper(mimeMessage,"utf-8");
			helper.setFrom("hameem28061995@gmail.com");			
			helper.setTo(ud.getEmail());
			helper.setSubject("Activate");
			//sm.setText("This is testing mail");
			helper.setText("Account created click on <a href='http://localhost:4200/activate?"+ud.getEmail()+"'>Click</a>",true);
			jms.send(mimeMessage);
			BeanUtils.copyProperties(ud, u);
			userDao.save(u);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		
		
		return ud;
	}
	
	
	@Override
	public String activate(@RequestBody String email) {
		String str=email.substring(email.indexOf(":")+2,email.lastIndexOf("\""));
		System.out.println("email ::"+str);
		User user=userDao.findByEmail(str);
		System.out.println("uname :"+user.getEmail());
		user.setConfirmed(true);
		user = userDao.save(user);
        return "{\"status\":\"ok\"}";
	}

	@Override
	public UserDTO update( UserDTO pd) {
		User u=new User();
		BeanUtils.copyProperties(pd, u);
		BeanUtils.copyProperties(userDao.save(u), pd);
		return pd;
	}

	@Override
	public UserDTO getUserByUsernameAndPassword(String username, String password) throws NoSuchElementException {
		User user = userDao.findByUsernameAndPassword(username, password).get();
		UserDTO userDTO = new UserDTO();
		BeanUtils.copyProperties(user, userDTO);
		return userDTO;
	}
	
	@Override
	public void delete(int id) {
		userDao.deleteById(id);
	
	}

	@Override
	public List<UserDTO> getAllUsers() {
		List<User> entities = userDao.findAll();
		List<UserDTO> usersDTO = new ArrayList<UserDTO>();
		for(User entity: entities) {
			UserDTO userDTO = new UserDTO();
			BeanUtils.copyProperties(entity, userDTO);
			usersDTO.add(userDTO);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+usersDTO);
		return usersDTO;
	}

	@Override
	public UserDTO getUserById(int id) {
		
		Optional<User> users = userDao.findById(id);
		UserDTO userDTO = new UserDTO();
		BeanUtils.copyProperties(users.orElse(new User()), userDTO);
		return userDTO;
		
	}
	
	
}
