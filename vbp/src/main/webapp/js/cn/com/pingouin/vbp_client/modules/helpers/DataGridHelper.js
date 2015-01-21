/**
 * 数据列表工具类
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper'//
    , {
      
      statics : {
        
        // 数据结果封装
        dataResult : {},
        
        // 数据是否被打印
        data_key_for_activePrint : 'vbp_activePrint',
        
        // 数据是否被打印具体值true是
        data_value_for_activePrint_true : true,
        
        // 数据是否被打印具体值false否
        data_value_for_activePrint_false : false,
        
        // 数据是否被打印的描述
        data_key_for_activePrintDescription : 'vbp_activePrintDescription',
        
        // 打印状态
        data_key_for_status : 'vbp_print_status',
        
        // 打印状态具体值true成功
        data_value_for_status_true : true,
        
        // 打印状态具体值false失败
        data_value_for_status_false : false,
        
        // 打印状态描述
        data_key_for_statusDescription : 'vbp_print_statusDescription',
        
        // 状态调整
        data_key_for_statusOfUserDefined : 'vbp_print_status_of_user_defined',
        
        // 状态调整具体值true成功
        data_value_for_statusOfUserDefined_true : true,
        
        // 状态调整具体值false失败
        data_value_for_statusOfUserDefined_false : false,
        
        /**
         * 取得数据列表窗体
         * 
         * @return {}
         */
        getDataGridPanel : function() {
          return Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_gridPanel)
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_gridPanelCmp);
        },
        
        /**
         * 取得store
         * 
         * @return {}
         */
        getDataStore : function() {
          var gridPanel = this.getDataGridPanel();
          return gridPanel.getStore();
        },
        
        /**
         * 取得选择器
         * 
         * @return {Ext.selection.Model}
         */
        getSelectionModel : function() {
          var gridPanel = this.getDataGridPanel();
          return gridPanel.getSelectionModel();
        },
        
        /**
         * 取得已选记录的个数
         * 
         * @return {Number}
         */
        getSelectedRowsCount : function() {
          var selectionModel = this.getSelectionModel();
          return selectionModel.getCount();
        },
        
        /**
         * 取得已选记录
         * 
         * @return {Array}
         */
        getSelectedRecords : function() {
          var selectionModel = this.getSelectionModel();
          return selectionModel.getSelection();
        },
        
        /**
         * 控制是否锁定选择器
         * 
         * @param {Boolean}
         *          locked
         */
        lockedSelectionModel : function(locked) {
          var selectionModel = this.getSelectionModel();
          selectionModel.setLocked(locked);
        },
        
        /**
         * 控制grid列“成功？”是否可选
         * 
         * @param {Boolean}
         *          isDisabled
         */
        setDisabledForGridColumnWithStatusOfUserDefined : function(isDisabled) {
          var gridPanel = this.getDataGridPanel();
          var checkcolumnWithStatusOfUserDefined = gridPanel
              .queryById(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_gridPanel_columnWithcheckcolumn_statusOfUserDefined);
          checkcolumnWithStatusOfUserDefined.setDisabled(isDisabled);
        },
        
        /**
         * 锁定数据列表，控制是否可以选择或编辑
         * 
         * @param {Boolean}
         *          flag
         */
        lockedGridDatas : function(flag) {
          this.lockedSelectionModel(flag);
          this.setDisabledForGridColumnWithStatusOfUserDefined(flag);
        },
        
        /**
         * 判断数据结果是否已经封装
         * 
         * @return {Boolean}
         */
        hasDataResult : function() {
          if (this.dataResult.datas && this.dataResult.datas.length && this.dataResult.datas.length > 0) {
            return true;
          }
          return false;
        },
        
        /**
         * 复制数据源到数据结果封装中
         * 
         * @param {}
         *          dataSource
         */
        copyDataSourceToDataResult : function(dataSource) {
          this.dataResult = dataSource;
          return this.dataResult;
        },
        
        /**
         * 装配属性到数据结果封装中
         * 
         * @param {}
         *          dataResult
         */
        configNewPropertiesToDataResult : function() {
          if (this.hasDataResult()) {
            for (var i = 0; i < this.dataResult.datas.length; i++) {
              this.dataResult.datas[i][this.data_key_for_activePrint] = this.data_value_for_activePrint_false;
              this.dataResult.datas[i][this.data_key_for_activePrintDescription] = "未打印";
              this.dataResult.datas[i][this.data_key_for_status] = this.data_value_for_status_false;
              this.dataResult.datas[i][this.data_key_for_statusDescription] = "";
              this.dataResult.datas[i][this.data_key_for_statusOfUserDefined] = this.data_value_for_statusOfUserDefined_false;
            }
          }
        },
        
        /**
         * 初始化数据结果封装
         * 
         * @param {}
         *          dataSource
         */
        processDataResult : function(dataSource) {
          // 复制源数据到全局变量中
          this.copyDataSourceToDataResult(dataSource);
          // 增加新配置
          this.configNewPropertiesToDataResult();
          return this.dataResult;
        },
        
        /**
         * 获取grid数据字段列表
         * 
         * @return {}
         */
        getDataStoreFields : function() {
          var fields = new Array();
          if (this.hasDataResult()) {
            for (var i in this.dataResult.datas[0]) {
              fields.push(i);
            }
          }
          return fields;
        },
        
        /**
         * 选择指定数据范围的行
         * 
         * @param {}
         *          property
         * @param {}
         *          startNumber
         * @param {}
         *          endNumber
         */
        selectRowsBySpecialRecordWithValueRangeOfNumber : function(property, startNumber, endNumber) {
          this.lockedSelectionModel(false);
          var selectionModel = this.getSelectionModel();
          selectionModel.deselectAll();
          var result = new Array();
          var store = this.getDataStore();
          store.filterBy(function(record, id) {
                if (record.get(property) >= startNumber && record.get(property) <= endNumber) {
                  result.push(record);
                }
                return true;
              });
          selectionModel.select(result, true);
          this.lockedSelectionModel(true);
        },
        
        /**
         * 更新数据指针显示到指定行
         * 
         * @param {}
         *          dataIndex
         */
        focusGridStoreRowByIndex : function(dataIndex) {
          // gridPanel.getView().focusRow(dataIndex);
          var selectionModel = this.getSelectionModel();
          var selectedRecords = this.getSelectedRecords();
          selectionModel.setLastFocused(selectedRecords[dataIndex]);
        },
        
        /**
         * 设置数据列表中的所有选中记录的字段值（支持多字段）
         * 
         * @param []
         *          key
         * @param []
         *          value
         */
        setAllSelectedGridStoreRecord : function(key, value) {
          if (true//
              && key && key.length && key.length > 0//
              && value && value.length && value.length > 0//
              && key.length == value.length//
          )//
          {
            // var record = gridPanel.getStore().getAt(dataIndex);
            var selectedRecords = this.getSelectedRecords();
            for (var i = 0; i < selectedRecords.length; i++) {
              var record = selectedRecords[i];
              for (var j = 0; j < key.length; j++) {
                record.set(key[j], value[j]);
                record.commit();
              }
            }
          } else {
            Ext.MessageBox.alert('错误', '设置数据列表中的所有选中记录的字段值时出错！');
          }
        },
        
        /**
         * 设置数据列表中的指定记录的字段值（支持多字段）
         * 
         * @param {}
         *          dataIndex
         * @param []
         *          key
         * @param []
         *          value
         */
        setGridStoreRecordByDataIndex : function(dataIndex, key, value) {
          if (true//
              && key && key.length && key.length > 0//
              && value && value.length && value.length > 0//
              && key.length == value.length//
          )//
          {
            // var record = gridPanel.getStore().getAt(dataIndex);
            var selectedRecords = this.getSelectedRecords();
            var record = selectedRecords[dataIndex];
            for (var i = 0; i < key.length; i++) {
              record.set(key[i], value[i]);
              record.commit();
            }
          } else {
            Ext.MessageBox.alert('错误', '设置数据列表中的指定记录的字段值时出错！');
          }
        },
        
        /**
         * 设置所有选中的数据列表中状态字段的值为“等待打印”
         */
        setAllSelectedGridStoreRecordWithStatusToWaitPrint : function() {
          var key = new Array(//
              this.data_key_for_status//
              , this.data_key_for_statusDescription//
          );
          var value = new Array(//
              this.data_value_for_status_false//
              , '等待打印'//
          );
          this.setAllSelectedGridStoreRecord(key, value);
        },
        
        /**
         * 设置数据列表中状态字段的值为“正在打印”，并设置打印标志位为“激活打印”
         * 
         * @param {}
         *          printIndex
         */
        setGridStoreRecordWithStatusToStartPrint : function(printIndex) {
          var key = new Array(//
              this.data_key_for_status//
              , this.data_key_for_statusDescription//
              , this.data_key_for_activePrint//
              , this.data_key_for_activePrintDescription//
          );
          var value = new Array(//
              this.data_value_for_status_false//
              , '正在打印'//
              , this.data_value_for_activePrint_true//
              , '激活打印'//
          );
          this.setGridStoreRecordByDataIndex(printIndex, key, value);
        },
        
        /**
         * 设置数据列表中状态字段的值为“成功”
         * 
         * @param {}
         *          printIndex
         */
        setGridStoreRecordWithStatusToSuccessPrint : function(printIndex) {
          var key = new Array(//
              this.data_key_for_status//
              , this.data_key_for_statusDescription//
              , this.data_key_for_statusOfUserDefined//
          );
          var value = new Array(//
              this.data_value_for_status_true//
              , '<span style="color:green;"><b>成功</b></span>'//
              , this.data_value_for_statusOfUserDefined_true//
          );
          this.setGridStoreRecordByDataIndex(printIndex, key, value);
        },
        
        /**
         * 设置数据列表中状态字段的值为“失败”
         * 
         * @param {}
         *          printIndex
         */
        setGridStoreRecordWithStatusToFailedPrint : function(printIndex) {
          var key = new Array(//
              this.data_key_for_status//
              , this.data_key_for_statusDescription//
              , this.data_key_for_statusOfUserDefined//
          );
          var value = new Array(//
              this.data_value_for_status_false//
              , '<span style="color:red;"><b>失败</b></span>'//
              , this.data_value_for_statusOfUserDefined_false//
          );
          this.setGridStoreRecordByDataIndex(printIndex, key, value);
        },
        
        //
        nothing : null
      },
      
      //
      nothing : null
    }//
);
