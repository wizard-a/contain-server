-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users` (
  `id` integer AUTO_INCREMENT COMMENT '主键',
  `login_name` varchar(25) NOT NULL COMMENT '登录账号',
  `name` varchar(25) DEFAULT NULL COMMENT '用户名',
  `pwd` varchar(100) NOT NULL COMMENT '密码',
  `status` integer(4) NOT NULL DEFAULT 1 COMMENT '状态:1正常 0:被锁定',
  `valid_time` datetime DEFAULT NULL COMMENT '有效期',
  `created_by` integer NOT NULL COMMENT '创建人',
  `created_at` datetime NOT NULL COMMENT '创建时间',
  `updated_by` integer DEFAULT NULL COMMENT '修改人',
  `updated_at` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户';



-- ----------------------------
-- Table structure for t_template
-- ----------------------------
DROP TABLE IF EXISTS `t_template`;
CREATE TABLE `t_template` (
  `id` VARCHAR(40) COMMENT '主键',
  `name` varchar(25) NOT NULL COMMENT '模板类型名称',
  `pid` varchar(25) DEFAULT NULL COMMENT '父模板',
  `content` json DEFAULT NULL COMMENT '模板内容',
  `created_by` varchar(25) NOT NULL COMMENT '创建人',
  `created_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_by` varchar(45) DEFAULT NULL COMMENT '修改人',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='模板表';

