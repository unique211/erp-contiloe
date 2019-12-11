<?php
class Settingsmodel extends CI_Model{

	    function data_get_where_subcategory($table,$where){
		$this->db->select('vendor_subcategory.*,vendor_category.name as category');    
		$this->db->from('vendor_subcategory');
		$this->db->join('vendor_category', 'vendor_category.id = vendor_subcategory.category_id');
		if($where!=""){
					$this->db->where($where);				
			}
			$hasil=$this->db->get();
			return $hasil->result();
		}


	    function data_get_where_worktype($table,$where){
		$this->db->select('vendor_worktype.*,vendor_category.name as category');    
		$this->db->from('vendor_worktype');
//		$this->db->join('vendor_subcategory', 'vendor_subcategory.id = vendor_worktype.subcategory_id');
		$this->db->join('vendor_category', 'vendor_category.id = vendor_worktype.category_id');
		if($where!=""){
					$this->db->where($where);				
			}
			$hasil=$this->db->get();
			return $hasil->result();
		}

	    function data_get_where_state($table,$where){
		$this->db->select('state.*,country.name as countryname');    
		$this->db->from('state');
		$this->db->join('country', 'country.id = state.country_id');
		if($where!=""){
					$this->db->where($where);				
			}
			$hasil=$this->db->get();
			return $hasil->result();
		}


	    function data_get_where_city($table,$where){
		$this->db->select('city.*,state.name as statename');    
		$this->db->from('city');
		$this->db->join('state', 'state.id = city.state_id');
		if($where!=""){
					$this->db->where($where);				
			}
			$hasil=$this->db->get();
			return $hasil->result();
		}

	
/*	    function data_insert($data,$table){
			$result = $this->db->insert($table,$data);
			return $result;
		}

	    function data_update($data,$table,$colum,$id){
    					$this->db->where($colum,$id);
			$result = $this->db->update($table,$data);
			return $result;
		}
		
	    function data_get($table){
			$hasil=$this->db->get($table);
			return $hasil->result();
		}
	    function data_get_where($table,$where){
			if($where!=""){
    					$this->db->where($where);				
			}
			$hasil=$this->db->get($table);
			return $hasil->result();
		}
	    function get_count($table){
			$hasil=$this->db->get($table);
			return $hasil->num_rows();
		}
	    function get_count_where($table,$where){
			if($where!=""){
    					$this->db->where($where);				
			}
			$hasil=$this->db->get($table);
			return $hasil->num_rows();
		}
		
	    function get_insertid($table,$id){
					$this->db->select_max($id);
			$hasil=$this->db->get($table);
			return $hasil->row()->$id;
		}
	    function get_insertid_new($table,$id){
			$query =" SHOW TABLE STATUS LIKE '$table' ";
			$hasil=$this->db->query($query);
			return $hasil->row()->Auto_increment;
		}
		
	    function data_delete($table,$colum,$id){
    					$this->db->where($colum,$id);
			$result = $this->db->delete($table);
			return $result;
		}
*/		
}
?>