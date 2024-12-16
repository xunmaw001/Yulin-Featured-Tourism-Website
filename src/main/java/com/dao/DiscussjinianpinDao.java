package com.dao;

import com.entity.DiscussjinianpinEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DiscussjinianpinVO;
import com.entity.view.DiscussjinianpinView;


/**
 * 纪念品评论表
 * 
 * @author 
 * @email 
 * @date 2023-02-20 09:57:19
 */
public interface DiscussjinianpinDao extends BaseMapper<DiscussjinianpinEntity> {
	
	List<DiscussjinianpinVO> selectListVO(@Param("ew") Wrapper<DiscussjinianpinEntity> wrapper);
	
	DiscussjinianpinVO selectVO(@Param("ew") Wrapper<DiscussjinianpinEntity> wrapper);
	
	List<DiscussjinianpinView> selectListView(@Param("ew") Wrapper<DiscussjinianpinEntity> wrapper);

	List<DiscussjinianpinView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussjinianpinEntity> wrapper);
	
	DiscussjinianpinView selectView(@Param("ew") Wrapper<DiscussjinianpinEntity> wrapper);
	

}