<?php
class Loginmodel extends CI_Model{
	
	
 function check_login(){
	 
        $user_id =$this->input->post('user_id');
        $password =$this->input->post('password');
       // $user_id ="admin";
      //  $password ="admin";
		$msg = 0;	 
			$this->db->select(['password','user_id','user_master.id','role','user_name','role_master.name']);    
			$this->db->from('user_master');
			$this->db->join('role_master', 'role_master.id = user_master.role');
			$this->db->where('user_id', $user_id);
			$this->db->where('password', $password);
			$query = $this->db->get();

			if($query->num_rows()>0){
			
			$get_email = $query->row()->user_id;
			$get_password = $query->row()->password;
			$get_id = $query->row()->id;
			$role = $query->row()->name;
			$username = $query->row()->user_name;
			
			
			
				if(($get_email==$user_id)&&($get_password==$password)){
					$msg = 1;
					
					$this->session->userid = $get_id;
					$this->session->role = $role;
					$this->session->username = $username;
					
				}
				
			}
			return $msg;
			
       }
}
?>