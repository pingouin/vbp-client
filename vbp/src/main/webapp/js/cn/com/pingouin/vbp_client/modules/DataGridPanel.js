/**
 * 数据列表窗体
 */
Ext.define(//
    'cn.com.pingouin.vbp_client.modules.DataGridPanel'//
    , {
      
      extend : 'Ext.panel.Panel',
      
      config : {
        vbpConfiguration : null,// 数据配置
        nothing : null
      },
      
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_gridPanel,
      title : '数据列表',
      
      initComponent : function() {
        
        var thisContainer = this;
        var vbpConfiguration = this.vbpConfiguration;
        
        var dataResult = cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.dataResult;
        var dataStoreFields = cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.getDataStoreFields();
        
        Ext.create('Ext.data.Store', {
              storeId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.store_id_gridPanel,
              fields : dataStoreFields,
              data : dataResult,
              proxy : {
                type : 'memory',
                reader : {
                  type : 'json',
                  root : 'datas'
                }
              }
            });
        
        // 剩余列的宽度
        var residueWidth = 48;
        // 序号列的宽度
        var rowNumberWidth = 48;
        // 主键列的宽度
        var idWidth = 80;
        // 状态列的宽度
        var statusWidth = 60;
        // 状态调整列的宽度
        var statusOfUserDefinedCheckboxWidth = 40;
        // 名称列的宽度
        var nameWidth 
        = thisContainer.width - rowNumberWidth - idWidth - statusWidth - statusOfUserDefinedCheckboxWidth - residueWidth;
        
        var columns = new Array();
        //
        columns.push({
              text : '序号',
              xtype : 'rownumberer',
              align : 'center',
              width : rowNumberWidth
            });
        columns.push({
              text : '证书编号',
              align : 'center',
              dataIndex : vbpConfiguration.basicSetting.dataPropertyForId,
              width : idWidth
            });
        columns.push({
              text : '名称',
              align : 'center',
              dataIndex : vbpConfiguration.basicSetting.dataPropertyForName,
              width : nameWidth
            });
        columns.push({
              text : '打印状态',
              align : 'center',
              dataIndex : cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.data_key_for_statusDescription,
              width : statusWidth
            });
        columns.push({
          xtype : 'checkcolumn',
          itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_gridPanel_columnWithcheckcolumn_statusOfUserDefined,
          text : '成功？',
          align : 'center',
          dataIndex : cn.com.pingouin.vbp_client.modules.helpers.DataGridHelper.data_key_for_statusOfUserDefined,
          width : statusOfUserDefinedCheckboxWidth
        });
        
        var gridPanel = Ext.create(
        		'Ext.grid.Panel'
        		, {
		              region : 'center',
		              itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_gridPanelCmp,
		              autoScroll : true,
		              store : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.store_id_gridPanel,
		              columns : columns,
		              selModel : Ext.create('Ext.selection.CheckboxModel'),
		              columnLines : true,
		              bodyBorder : false,
		              border : false,
		              style : {
		                "border-radius" : '0px',
		                "border-width" : '0px 0px 0px 0px'
		              },
		              listeners : {
		                afterrender : {
		                  fn : function() {
		                    this.getSelectionModel().selectAll();
		                  }
		                },
		                itemdblclick : {
		                  fn : function(/* Ext.view.View */view, /* Ext.data.Model */record, /* HTMLElement */item, /* Number */
		                      index, /* Ext.EventObject */e, /* Object */eOpts) { //
		                    try {
		                      var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
		                      iframe.getEl().dom.children[0].contentWindow.printZonePreview(record.data);
		                    } catch (e) {
		                      alert('调用异常:' + e);
		                    }
		                  }
		                }
		              },
		              //
		              nothing : null
        		});
        
        Ext.apply(//
            this//
            , {
              layout : 'border',
              items : gridPanel,
              bodyBorder : false,
              border : false,
              style : {
                "border-radius" : '0px',
                "border-width" : '0px 0px 0px 0px'
              }
            }//
        );
        
        cn.com.pingouin.vbp_client.modules.DataGridPanel.superclass.initComponent.apply(this, arguments);
      },
      
      //
      nothing : null
    }//
);
