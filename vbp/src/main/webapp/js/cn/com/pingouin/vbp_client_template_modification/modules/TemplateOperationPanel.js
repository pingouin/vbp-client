/**
 * 打印操作窗体
 */
Ext.define(//
    'cn.com.pingouin.vbp_client_template_modification.modules.TemplateOperationPanel'//
    , {
      
      extend : 'Ext.panel.Panel',
      
      config : {
        taskForPrintControl : null
      },
      
      id : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_templateOperationPanel,
      title : '模板操作',
      
      initComponent : function() {
        
        var templateOperationPanel = Ext.create('Ext.panel.Panel', {
          region : 'center',
          frame : true,
          bodyBorder : false,
          border : false,
          style : {
            "border-radius" : '0px',
            "border-width" : '0px 0px 0px 0px'
          },
          buttonAlign : 'center',
          buttons : [{
            maxWidth : 50,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_templateOperationPanel_preview,
            text : '预览',
            handler : function(button) {
            	try {
            		var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                    iframe.getEl().dom.children[0].contentWindow.printZonePreviewWithoutData();
                } catch (e) {
                    alert('调用异常:' + e);
                }
            },
            scope : this
          }, {
        	hidden : true,
            maxWidth : 60,
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_templateOperationPanel_templatePropertyConfig,
            text : '模板属性' + '<br>' + '设置',
            handler : function(button) {
            	try {
            		var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                    iframe.getEl().dom.children[0].contentWindow.openTemplatePropertyConfigWindow();
                } catch (e) {
                    alert('调用异常:' + e);
                }
            },
            listeners : {
            	render : {
            		fn : function(button) {
            			var vbptmConfiguration = Ext.create('cn.com.pingouin.vbp_client_template_modification.VbptmConfiguration');
            			if(vbptmConfiguration.templatePropertySetting) {
            				button.setVisible(true);
            			}
            		}
            	}
            },
            scope : this
          }, {
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_templateOperationPanel_save,
            text : '保存',
            handler : function(button) {
            	var confirmHandler = function(command) {
              	  if ( 'yes' == command ) {
              		try {
                		var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                        iframe.getEl().dom.children[0].contentWindow.vbpTemplateSave();
                    } catch (e) {
                        alert('调用异常:' + e);
                    }
              	  }
                };
                Ext.MessageBox.confirm('保存确认', '您确定要保存当前模板么?', confirmHandler, this);
            	
            },
            scope : this
          }, {
            scale : 'medium',
            itemId : cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.item_id_templateOperationPanel_saveAs,
            text : '另存为',
            handler : function(button) {
            	var confirmHandler = function(command) {
            		if ( 'yes' == command ) {
            			try {
            				var iframe = Ext.getCmp(cn.com.pingouin.vbp_client.utils.ConstantsForComponentId.id_iframe);
                            iframe.getEl().dom.children[0].contentWindow.vbpTemplateSaveAs();
                        } catch (e) {
                            alert('调用异常:' + e);
                        }
                	}
                };
                Ext.MessageBox.confirm('保存确认', '您确定要保存当前模板么?', confirmHandler, this);
            	
            },
            scope : this
          }],
          nothing : null
        });
        
        Ext.apply(//
            this//
            , {
              layout : 'border',
              items : templateOperationPanel,
              bodyBorder : false,
              border : false,
              style : {
                "border-radius" : '0px',
                "border-width" : '0px 0px 0px 0px'
              }
            }//
        );
        
        cn.com.pingouin.vbp_client_template_modification.modules.TemplateOperationPanel.superclass.initComponent.apply(this, arguments);
      },
      
      //
      nothing : null
    }//
);
