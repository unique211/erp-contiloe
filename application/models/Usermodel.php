<?php
class Usermodel extends CI_Model{
	
	    function data_get(){
					$this->db->select('user_master.*,(SELECT role_master.name  FROM role_master WHERE role_master.id=user_master.role) AS role_name');    
					$this->db->from('user_master');
					$query = $this->db->get();
					return $query->result();
		}
		
		
}
?>