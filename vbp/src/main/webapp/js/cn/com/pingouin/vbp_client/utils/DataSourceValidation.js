/**
 * 数据源验证类
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.utils.DataSourceValidation'//
    , {
      
      statics : {
        
        /**
         * 验证数据源格式是否正确
         * 
         * @param {}
         *          dataSource
         * @param {}
         *          vbpConfiguration
         * @return {Boolean}
         */
        isValid : function(dataSource, vbpConfiguration) {
          if (!dataSource) {
            Ext.MessageBox.alert('错误', '数据源不存在！');
            return false;
          }
          if (dataSource == null || dataSource == '') {
            Ext.MessageBox.alert('错误', '数据源为空！');
            return false;
          }
          if (!dataSource.datas) {
            Ext.MessageBox.alert('错误', '数据源格式不正确！缺少datas属性<br/>正确的格式如下：<br/>' + this.formatOstensive());
            return false;
          }
          if (dataSource.datas == null || dataSource.datas == '') {
            Ext.MessageBox.alert('错误', '数据源中的数据项为空！');
            return false;
          }
          if (!dataSource.datas.length) {
            Ext.MessageBox.alert('错误', '数据源中的数据项格式不正确！必须是数组类型<br/>正确的格式如下：<br/>' + this.formatOstensive());
            return false;
          }
          if (!dataSource.datas.length > 0) {
            Ext.MessageBox.alert('错误', '数据源中的数据项为空！');
            return false;
          }
          for (var i = 0; i < dataSource.datas.length; i++) {
            var data = dataSource.datas[i];
            var dataPropertyForId = vbpConfiguration.basicSetting.dataPropertyForId;
            var dataPropertyForName = vbpConfiguration.basicSetting.dataPropertyForName;
            if (!data.hasOwnProperty(dataPropertyForId)) {
              Ext.MessageBox.alert('错误', '数据源中的数据项格式不正确！缺少' + dataPropertyForId + '属性<br/>正确的格式如下：<br/>'
                      + this.formatOstensive());
              return false;
            }
            if (!data.hasOwnProperty(dataPropertyForName)) {
              Ext.MessageBox.alert('错误', '数据源中的数据项格式不正确！缺少' + dataPropertyForName + '属性<br/>正确的格式如下：<br/>'
                      + this.formatOstensive());
              return false;
            }
          }
          
          return true;
        },
        
        /**
         * 正确的数据源格式事例
         * 
         * @return {}
         */
        formatOstensive : function() {
          var result = ""//
              + "{"//
              + "datas"//
              + ":"//
              + "["//
              
              // each data - start
              + "{"//
              + "'name'"//
              + ":"//
              + "'Lisa'"//
              + ","//
              + "'email'"//
              + ":"//
              + "'lisa@simpsons.com'"//
              + ","//
              + "'phone'"//
              + ":"//
              + "'555-111-1224'"//
              + ","//
              + "'status'"//
              + ":"//
              + "''"//
              + "}"//
              
              + ","//
              
              + "{"//
              + "'name'"//
              + ":"//
              + "'Bart'"//
              + ","//
              + "'email'"//
              + ":"//
              + "'bart@simpsons.com'"//
              + ","//
              + "'phone'"//
              + ":"//
              + "'555-222-1234'"//
              + ","//
              + "'status'"//
              + ":"//
              + "''"//
              + "}"//
              // each data - end
              
              + "]"//
              + "}"//
          ;
          
          return result;
        },
        
        //
        nothing : null
        
      },
      
      //
      nothing : null
    }//
);
