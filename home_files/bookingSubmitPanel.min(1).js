Site.bookingSubmitPanel={};(function(z,F,j){var E=0,y=480,d=540,M=0,s=0,p={},L="",x,l="#module44",t=[],r=Fai.isIE6()||Fai.isIE7()||Fai.isIE8(),g=[],m={};F.dom={};var I=Fai.top._lcid==2052||Fai.top._lcid==1028;function w(){var U=(Fai.top.$("body").width()-s)/2;var S=(Fai.top.$("body").height()-M)/2;var T=[];T.push('<div class="fk-panelFormBooking" id="fk-bookingSubmitPanel" style="display:none;">');T.push('	<div class="J_popup_bg f-contentBg J_contentBg"></div>');T.push('	<div class="f-content J_content" id="module44" style="width:'+s+"px; height:"+M+"px; top:"+S+"px; left:"+U+'px;">');T.push('		<div class="f-content-head">');T.push('			<div class="f-content-title"> </div>');T.push("		</div>");T.push('		<div class="f-innerContent" id="f-innerContent" style="overflow:hidden;"></div>');T.push('		<div class="bookingPanelMsg" id="bookingPanelMsg"></div>');T.push('		<a href="javascript:;" class="f-close J_close" onclick="return false;" title="关闭" hidefocus="true">关闭</a>');T.push("	</div>");T.push("</div>");return T}function P(){var T=[];if(!m.bookingOpen){var V=m.bookingClosedTip;if(Fai.top._manageMode){V+=("，"+m.pleaseClick+"<a target='_blank' href='javascript:Site.openMallEdit(\"manageFrameBookingEdit\");'>"+m.setUp+"</a>")}T.push('		<table class="bookingCloseTable" cellpadding="0" cellspacing="0">');T.push('			<tr><td style="text-align:center;">');T.push('				<div class="bookingClosePic"></div>');T.push('				<div class="bookingCloseTip">'+V+"</div>");T.push("			</td></tr>");T.push("		</table>")}else{var S=p.verticalShowType;var X=M-110;T.push('<div class="tableWrap" id="tableWrap" style="height:'+X+'px">');S?i(T):v(T);T.push("</div>")}var U=document.getElementById("tableWrap");if(U!=null){U.parentNode.removeChild(U)}var W=F.dom;W.innerContent.append(T.join(""));W.content.find(".f-content-title").text(p.moduleTitle);n()}function v(S){S.push('	<table class="bookingSubmitPanel_table" cellpadding="0" cellspacing="0">');S.push("		<tbody>");z.each(m.contentList,function(T,U){if(U.hide){return true}S.push('		<tr _contentId="'+U.id+'" _type="'+U.type+'">');if(U.headline==""){S.push('			<td class="column1"><div class="itemName" title="'+Fai.encodeHtml(U.name)+'">'+Fai.encodeHtml(U.name)+"</div></td>")}else{S.push('			<td class="column1"><div class="itemName" title="'+Fai.encodeHtml(U.headline)+'">'+Fai.encodeHtml(U.headline)+"</div></td>")}S.push('			<td class="column2">');S.push('				<div class="itemInput">');S.push(u(U));U.must&&U.type!=5?S.push('		<span class="inputMust">*</span>'):S.push("");S.push("				</div>");S.push("			</td>");S.push("		</tr>")});if(m.validation){S.push('		<tr _validationTr="true">');S.push('			<td class="column1"><div class="itemName">'+LS.loginDialogCaptcha+"</div></td>");S.push('			<td class="column2">');S.push('				<div class="itemInput">');S.push('					<div class="validateInputAndCode">');S.push('							<input id="bookingVolidationCode" class="voteCodeInputText" type="text" maxlength="4"/>');S.push('							<img alt="" class="voteCodePic" onclick="Site.changeCaptchaImg(this, 3)" title="'+LS.msgBoradChageValidateCode+'" id="memberCaptchaImg" src="validateCode.jsp?validateCodeRegType=3&Math.random()*1000">');S.push("					</div>");S.push('					<span class="inputMust">*</span>');S.push("				</div>");S.push("			</td>");S.push("		</tr>")}S.push('			<tr _submitTr="true">');S.push("				<td></td>");S.push('				<td class="column2">');S.push('					<div class="itemInput">');S.push('						<div class="addButtonshowType" id="bookingSubmitBtn">');S.push('							<div class="s_ibutton s_ibutton'+p[m.Def_BookingSubmit_BTN_STYLE]+'" type="botton" >');S.push('								<div class="left"></div>');S.push('								<div class="middle ">'+Fai.encodeHtml(m.buttonName)+"</div>");S.push('								<div class="right"></div>');S.push("							</div>");S.push("						</div>");S.push("					</div>");S.push("				</td>");S.push("			</tr>");S.push("		</tbody>");S.push("	</table>")}function i(S){S.push('	<table class="bookingSubmitPanel_table vertical" cellpadding="0" cellspacing="0">');S.push("		<tbody>");z.each(m.contentList,function(T,U){if(U.hide){return true}S.push('		<tr _contentId="'+U.id+'" _type="'+U.type+'">');S.push('			<td class="column1">');if(U.headline==""){S.push('				<div class="itemName" title="'+Fai.encodeHtml(U.name)+'">'+Fai.encodeHtml(U.name)+"</div>")}else{S.push('				<div class="itemName" title="'+Fai.encodeHtml(U.headline)+'">'+Fai.encodeHtml(U.headline)+"</div>")}S.push('				<div class="itemInput">');S.push(u(U));U.must&&U.type!=5?S.push('		<span class="inputMust">*</span>'):S.push("");S.push("				</div>");S.push("			</td>");S.push("		</tr>")});if(m.validation){S.push('		<tr _validationTr="true">');S.push('			<td class="column1">');S.push('				<div class="itemName">'+LS.loginDialogCaptcha+"</div>");S.push('				<div class="itemInput">');S.push('					<div class="validateInputAndCode">');S.push('							<input id="bookingVolidationCode" class="voteCodeInputText" type="text" maxlength="4"/>');S.push('							<img alt="" class="voteCodePic" onclick="Site.changeCaptchaImg(this, 3)" title="'+LS.msgBoradChageValidateCode+'" id="memberCaptchaImg" src="validateCode.jsp?validateCodeRegType=3&Math.random()*1000">');S.push("					</div>");S.push('					<span class="inputMust">*</span>');S.push("				</div>");S.push("			</td>");S.push("		</tr>")}S.push('			<tr _submitTr="true">');S.push('				<td class="column1">');S.push('					<div class="itemInput">');S.push('						<div class="addButtonshowType" id="bookingSubmitBtn">');S.push('							<div class="s_ibutton s_ibutton'+p[m.Def_BookingSubmit_BTN_STYLE]+'" type="botton" >');S.push('								<div class="left"></div>');S.push('								<div class="middle ">'+Fai.encodeHtml(m.buttonName)+"</div>");S.push('								<div class="right"></div>');S.push("							</div>");S.push("						</div>");S.push("					</div>");S.push("				</td>");S.push("			</tr>");S.push("		</tbody>");S.push("	</table>")}function u(at){var af=at.id,V=at.type,av=at.name,ah=at.must,ac=at.input;Y=(at.placeholder==j)?"":at.placeholder;var S=p[m.Def_BookingSubmit_ARRAY_STYLE],ab=m.Def_BookingSubmit_ARRAY_AUTO,T=m.Def_BookingSubmit_ARRAY_FIX,al=p[m.Def_BookingSubmit_FIX_NUM];var aa=ac.split("\n");var aq="";var am=(at.openAreaCode==j)?true:at.openAreaCode;var Y=(at.placeholder==j)?"":at.placeholder;if(V==m.Def_ContentList_Type_SINGLE_LINE){aq="<input class='singleLineTextInput bookingSingleText' id='bookingSingleText_"+af+"' value='"+Fai.encodeHtml(typeof(m.memberName)=="undefined"||!at.sys?"":m.memberName)+"' placeholder='"+Fai.encodeHtml(Y)+"' type='text' maxlength='"+m.Def_LIMIT_INPUT_MAXLENTH+"'/>"}else{if(V==m.Def_ContentList_Type_MULTI_LINE){aq="<textArea class='bookingMultLine' id='bookingMultLine_"+af+"' rows='3' placeholder='"+Fai.encodeHtml(Y)+"' maxlength='"+m.Def_LIMIT_TEXTAREA_MAXLEN+"'/></textArea>"}else{if(V==m.Def_ContentList_Type_RADIO){var ap=[];z.each(aa,function(ax,ay){var aw="radioR_"+af+"_"+ax;if(ax%al==0&&S==T){ap.push("<div class='arrangeFixBox'>")}ap.push("			<div class='singelChoice'>");if(r){ap.push("				<input type='radio' name='radioR_"+af+"' id='"+aw+"' value='"+Fai.encodeHtml(ay)+"' /><label for='"+aw+"'>"+Fai.encodeHtml(ay)+"</label>")}else{ap.push(h("radioR_"+af,ay))}ap.push("			</div>");if((ax%al==al-1||ax==aa.length-1)&&S==T){ap.push("</div>")}});aq=ap.join("")}else{if(V==m.Def_ContentList_Type_MULTIPLECHOICE){var aj=[];z.each(aa,function(ax,ay){var aw="radioC_"+af+"_"+ax;if(ax%al==0&&S==T){aj.push("<div class='arrangeFixBox'>")}aj.push("<div class='multiChoice'>");if(r){aj.push("<input type='checkbox' name='radioC_"+af+"' id='"+aw+"' value='"+Fai.encodeHtml(ay)+"' /><label for='"+aw+"'>"+Fai.encodeHtml(ay)+"</label>")}else{aj.push(b("radioC_"+af,ay))}aj.push("</div>");if((ax%al==al-1||ax==aa.length-1)&&S==T){aj.push("</div>")}});aq=aj.join("")}else{if(V==m.Def_ContentList_Type_DROPDOWN){var U=[];if(r){U.push("<select class='dropDownSelect' id='dropDownSelect_"+af+"'>");z.each(aa,function(aw,ax){U.push("<option value='"+Fai.encodeHtml(ax)+"'>"+Fai.encodeHtml(ax)+"</option>")});U.push("</select>")}else{U.push("<div class='dropDownNewSelect' id='dropDownNewSelect_"+af+"'></div>")}aq=U.join("")}else{if(V==m.Def_ContentList_Type_DESC){aq=Fai.encodeHtml(ac)}else{if(V==m.Def_ContentList_Type_DATE){var an=[];var au="bookingDate_"+af;var ao=at.dateSetting;var ai=(ao.type==j?0:ao.type)==1;var Z={id:au,dateSetting:ao};t.push(Z);an.push("<div class='siteFormMiddle'>");an.push("<input type='text' class='g_itext siteFormTimer "+(ai?"fk-startTime":"")+"' name='"+au+"' id='"+au+"' readonly />");if(ai){var ak="bookingDate_"+af+"_end";var Z={id:ak,dateSetting:ao};t.push(Z);an.push("<span class='fk-timeUtile'>"+LS.to+"</span>");an.push("<div class='fk-endTimeWrap'>");an.push("	<input type='text' class='fk-endTime g_itext siteFormTimer' name='"+ak+"' id='"+ak+"' readonly />");an.push("	<div _startId = '"+au+"' class='J_endTimeMask fk-endTimeMask'></div>");an.push("</div>")}an.push("</div>");aq=an.join("")}else{if(V==m.Def_ContentList_Type_FILE_UPLOAD){var ae=(at.size>m.fileSizeLimit)?m.fileSizeLimit:at.size;var W=[];if(!at.isAllFile){var ad=(at.dftl||"")+(at.cftl||"");var X=ad.split(" ");z.each(X,function(ay,aw){if(aw.length>0){var ax="*."+aw+";";W.push(ax)}})}else{W.push("*.*;")}g.push({itemId:af,buttonValue:m.siteFormSelectFile,fileSize:ae,srcjQueryUploadPath:m.srcjQueryUploadPath,fileTypeList:W});var ar=[];ar.push("<input type='button' class='fileUploadBtn' id='bookingUploadBtn_"+af+"' value='"+m.siteFormSelectFile+"'/>");ar.push("<div id='bookingUploadFile_"+af+"' class='bookingUploadFile' _tmpFileId='' style='display:none; margin: 8px 0 0 20px;'>"+LS.siteFormSubmitNotSeletcFile+"</div>");ar.push("<span id='bookingUploadDESC_"+af+"' style='margin: 8px 0 0 1%; display:inline-block;'><span class='siteFormFUDescIcons newSiteFormFUDescIcons'></span>"+m.siteFormFileSizeLimit+"："+ae+"M</span>");aq=ar.join("")}else{if(V==m.Def_ContentList_Type_PHONE){var ag=[];if(am){if(r){ag.push("<select class='phoneSelect' id='phoneSelect_"+af+"'>");z.each(m.mobileCtNameList,function(aw,ax){ag.push("<option value='"+ax.ctName+"'>"+ax.ctShowName+ax.ctCode+"</option>")});ag.push("</select>")}else{ag.push("<div class='phoneNewSelect' id='phoneNewSelect_"+af+"'></div>")}ag.push("<input class='bookingPhoneWithCode' id='bookingPhoneNum_"+af+"' value='"+Fai.encodeHtml(typeof(m.memberMobile)=="undefined"||!/^[0-9]*$/.test(m.memberMobile)||!at.sys?"":m.memberMobile)+"' type='number' onkeyup='(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,\"\");}).call(this)'  oninput='if(value.length>11)value=value.slice(0,11)'/>");aq=ag.join("")}else{aq="<input class='singleLineTextInput bookingPhoneNoCode' id='bookingPhoneNum_"+af+"' value='"+Fai.encodeHtml(typeof(m.memberMobile)=="undefined"||!/^[0-9]*$/.test(m.memberMobile)||!at.sys?"":m.memberMobile)+"' type='text' onkeyup='(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,\"\");}).call(this)' oninput='if(value.length>11)value=value.slice(0,11)'/>"}}else{if(V==m.Def_ContentList_Type_MAIL){aq="<input class='singleLineTextInput bookingMailInput' id='bookingMailInput_"+af+"' type='text' name='input' />"}else{if(V==m.Def_ContentList_Type_IDENTITY){aq="<input class='singleLineTextInput bookingIdentityInput' id='bookingIdentityInput_"+af+"' type='text' name='input' />"}else{if(V==m.Def_ContentList_Type_ADDRESS){aq=e(at)}}}}}}}}}}}}return aq}function h(S,U){var T=[];T.push("	<span class='jz-radio R_"+S+"' inputName='"+S+"'>");T.push("		<span class='jz-radio-inner'></span>");T.push("		<input name='"+S+"' type='radio' class='jz-radio-input' value='"+Fai.encodeHtml(U)+"'/>");T.push("		<span class='labelForRadio'>"+Fai.encodeHtml(U)+"</span>");T.push("	</span>");return T.join("")}function b(S,U){z(l).off("click.ncheckbox").on("click.ncheckbox",".jz-checkBox",function(){if(z(this).hasClass("jz-check-checked")){z(this).removeClass("jz-check-checked");z(this).find(".jz-radio-input").attr("checked",false)}else{z(this).addClass("jz-check-checked");z(this).find(".jz-radio-input").attr("checked",true)}});var T=[];T.push("	<span class='bsCheckBox jz-checkBox C_"+S+"'>");T.push("		<span class='jz-checkBox-inner'></span>");T.push("		<input name='"+S+"' type='checkbox' style='display:none;' class='jz-radio-input' value='"+Fai.encodeHtml(U)+"'/>");T.push("		<span class='labelForCheckBox'>"+Fai.encodeHtml(U)+"</span>");T.push("	</span>");return T.join("")}function c(S){var T=function(V){var ab={container:z("body"),widgetClass:"selectTool",width:75,id:0,selectList:null,checkIndex:0,onchange:null,selectIcon:false,selectListHeight:185,selectItemHeight:28,enable:false},ad,ac="",Z,ah,ai,ak,aa,U,ae,aj,W,al,af;ad=this.opts=z.extend({},ab,V,true);if(ad.selectList.length<=0){return}if(ad.selectList.length*ad.selectItemHeight<ad.selectListHeight){ad.selectListHeight=ad.selectList.length*ad.selectItemHeight}aa=this;ak=ad.checkIndex;ac='<div class="fk-select-widget J_select_widget '+ad.widgetClass+'" id="J_'+ad.widgetClass+ad.id+'"><input class="seleInput" style="width:0; height:0; opacity:0; float:right;"/><div class="J_select_text_wrap f-select-text-wrap"><div class="f-select-text J_select_text '+(ad.enable?"selectEnable":"")+'" value="'+ad.selectList[ak].value+'">'+Fai.encodeHtml(ad.selectList[ak].content)+'</div><a class="f-select-arrow J_select_arrow"></a></div></div>';ad.container.append(ac);Z="";ah=this.widgetDom=ad.container.find("#J_"+ad.widgetClass+ad.id);F.dom.panel.find("#"+ad.container.attr("id")+"_select_list").remove();F.dom.panel.append('<ul class="f-select-list J_select_list" id="'+ad.container.attr("id")+'_select_list" style="height:'+ad.selectListHeight+'px; display:none;"></ul>');ai=F.dom.panel.find("#"+ad.container.attr("id")+"_select_list");z.each(ad.selectList,function(am,an){Z='<li class="f-select-item J_select_item'+(am==ak?" f-select-on ":"")+'" selectIndex="'+am+'" style="'+ad.selectItemHeight+'px;"><a class="J_radio_label" value="'+Fai.encodeHtml(an.value)+'">'+Fai.encodeHtml(an.content)+"</a></li>";ai.append(Z);Z=""});this.itemDom=ae=ai.find(".J_select_item");U=ad.selectItemHeight*ad.selectList.length;if(ad.selectIcon){var ag="";ag='<span class="J_select_img"></span>';this.itemDom.find(".J_radio_label").append(ag)}if(ad.selectListHeight<U){ai.mCustomScrollbar({theme:"select-theme"})}ai.hide();af=ah.find(".seleInput");aj=ah.find(".J_select_text");ae.off("click.selectTool").on("click.selectTool",function(){var ap=z(this).find(".J_radio_label"),ao=ap.attr("value"),an=ap.text(),am=z(this).index();ad.checkIndex=am;aj.attr("value",ao);aj.text(an);ai.slideUp(150);W.removeClass("f-select-ratate-arrow");ae.removeClass("f-select-on");z(this).addClass("f-select-on");if(!!ad.onchange){ad.onchange(z(this),am,aa)}});W=ah.find(".J_select_arrow");al=ad.container.parents("body");ah.find(".J_select_text_wrap").off("click.selectTool").on("click.selectTool",function(am){if(ad.container.length!=1){return}if(ad.enable){return}if(!!ai.is(":hidden")){var an=ai.height();var ao=ad.container.height()+ad.container.offset().top+10-z(window).scrollTop();if(ao+an>Fai.top.$("body").height()){ao=ad.container.offset().top-ad.container.height()-an+10-z(window).scrollTop()}ai.css({width:ad.container.width(),position:"absolute",top:ao,left:ad.container.offset().left});al.find(".J_select_widget .J_select_arrow").removeClass("f-select-ratate-arrow");ai.slideDown(150);W.addClass("f-select-ratate-arrow")}else{ai.slideUp(150);W.removeClass("f-select-ratate-arrow")}af.focus();am.stopPropagation()});af.on("blur",function(){ai.slideUp(150);ai.parent().find(".J_select_arrow").removeClass("f-select-ratate-arrow")});var X="";var Y=navigator.userAgent.toLowerCase();if(/msie/.test(Y)){X="-ms-"}else{if(/chrome/.test(Y)||/safari/.test(Y)||/yandex/.test(Y)){X="-webkit-"}else{if(/mozilla/.test(Y)){X="-moz-"}else{if(/opera/.test(Y)){X="-o-"}else{if(/konqueror/.test(Y)){X="-khtml-"}else{X=""}}}}}ai.css(X+"user-select","none").attr("unselectable","on").on("selectstart mousedown",false)};z.extend(T.prototype,{selectValue:function(U){this.itemDom.each(function(){var V=z(this).find(".J_radio_label").attr("value");if(U==V){z(this).trigger("click");return}})},getValue:function(){return this.widgetDom.find(".J_select_text").attr("value")},destroy:function(){this.widgetDom.find(".J_select_list").mCustomScrollbar("destroy");this.opts=null;this.widgetDom=null},hideList:function(){var U=this.widgetDom.find(".J_select_widget");U.slideUp(150);U.parent().find(".J_select_arrow").removeClass("f-select-ratate-arrow")}});return new T(S)}function e(U){var S=[],X=U.id,T=U.openMunicipalCode;if(r){S.push("<select class='addrSelect proSelect' id='proSelect_"+X+"' _contentId='"+X+"'>");var W;var V;if(I){W=site_cityUtil.getProvince()}else{W=site_cityUtil.getProvinceEn()}S.push("<option _val='-1' value='-1'>"+m.siteFormPleaseSelect+"</option>");z.each(W,function(Y,Z){if(I){S.push("<option _val='"+Z.name+"' value='"+Z.id+"'>"+site_cityUtil.simpleCityNameStr(Z.name)+"</option>")}else{S.push("<option _val='"+Z.name+"' value='"+Z.id+"'>"+site_cityUtil.simpleCityNameStrEn(Z.name)+"</option>")}});S.push("</select>");S.push("<select class='addrSelect citySelect' id='citySelect_"+X+"' _contentId='"+X+"' disabled>");S.push("<option _val='-1' value='-1'>"+m.siteFormPleaseSelect+"</option>");S.push("</select>");if(T){S.push("<select class='addrSelect countySelect' id='countySelect_"+X+"' disabled>");S.push("<option _val='-1' value='-1'>"+m.siteFormPleaseSelect+"</option>");S.push("</select>")}return S.join("")}else{S.push("<div class='addrNewSelect proNewSelect' id='proNewSelect_"+X+"'></div>");S.push("<div class='addrNewSelect cityNewSelect' id='cityNewSelect_"+X+"'></div>");if(T){S.push("<div class='addrNewSelect countyNewSelect' id='countyNewSelect_"+X+"'></div>")}return S.join("")}}function A(W){var X=W.fileSize;var V=W.itemId;var ah=W.moduleId;var T=W.fileTypeList;var ae=W.buttonValue;var S=W.isModuleButtonStyle;var ac=W.showType;var Z=W.srcjQueryUploadPath;var ag;var aj;var U=document.documentElement||document.body;var Y=z("#bookingUploadBtn_"+V);var aa=Y.width();var ai;if(!Fai.isIE()){var ad={auto:true,fileTypeExts:T.join(""),multi:true,fileSizeLimit:X*1024*1024,fileSplitSize:20*1024*1024,breakPoints:true,isBurst:false,saveInfoLocal:false,showUploadedPercent:true,showUploadedSize:true,removeTimeout:9999999,post_params:{app:21,type:0,fileUploadLimit:X},getFileSizeUrl:"/ajax/advanceUpload.jsp?cmd=_getUploadSize",uploader:"/ajax/advanceUpload.jsp?cmd=_mobiupload",onUploadSuccess:function(ak,am){var al=z.parseJSON(am);if(al.success){Fai.ing(Fai.format(LS.siteFormSubmitFileUploadSucess,Fai.encodeHtml(ak.name)),true);o("upload",al,ah,V)}else{Fai.ing("文件:"+ak.name+"，"+al.msg)}},onUploadError:function(ak,al){z("#progressBody_"+ak.id).remove();z("#progressWrap_"+ak.id).remove();Fai.ing(Fai.format(LS.siteFormSubmitFileUploadSvrBusy,Fai.encodeHtml(ak.name)))}};function af(){ag=Y.uploadify(ad);Y.on("click",function(){Y.find("a")[0].click()})}if(typeof Y.uploadify=="function"){af()}else{aj=document.createElement("script");aj.src=Z;aj.type="text/javascript";U.appendChild(aj);aj.onload=function(){af()}}}else{var ab={file_post_name:"Filedata",upload_url:"/ajax/upsiteimg_h.jsp",button_placeholder_id:"bookingUploadBtn_"+V,file_size_limit:X+"MB",button_image_type:6,file_queue_limit:1,requeue_on_error:false,button_height:32,button_width:128,button_text:"<span class='fk_btText'>"+ae+"</span>",button_text_style:".fk_btText{text-align:center; font-family: 微软雅黑; color: #333;}",button_text_top_padding:6,post_params:{ctrl:"Filedata",app:21,type:0,isSiteForm:true},file_types:T.join(""),file_dialog_complete_handler:function(ak){this._allSuccess=false;this.startUpload()},file_queue_error_handler:function(al,ak,am){switch(ak){case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:Fai.ing(LS.siteFormSubmitCheckFileSizeErr,true);break;case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:Fai.ing(LS.siteFormSubmitFileUploadNotAllow,true);break;case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:Fai.ing(Fai.format(LS.siteFormSubmitFileUploadOneTimeNum,"一"),true);break;default:Fai.ing(LS.siteFormSubmitFileUploadReSelect,true);break}},upload_success_handler:function(al,ak){var am=jQuery.parseJSON(ak);this._allSuccess=am.success;this._sysResult=am.msg;if(am.success){Fai.ing(Fai.format(LS.siteFormSubmitFileUploadSucess,Fai.encodeHtml(al.name)),true);o("upload",am,ah,V)}else{Fai.ing(LS.siteFormSubmitFileUploadFile+al.name+"，"+am.msg)}},upload_error_handler:function(al,ak,am){if(ak==-280){Fai.ing(LS.siteFormSubmitFileUploadFileCancle,false)}else{if(ak==-270){Fai.ing(Fai.format(LS.siteFormSubmitFileUploadFileExist,Fai.encodeHtml(al.name)),true)}else{Fai.ing(Fai.format(LS.siteFormSubmitFileUploadSvrBusy,Fai.encodeHtml(al.name)))}}},upload_complete_handler:function(ak){if(ak.filestatus==SWFUpload.FILE_STATUS.COMPLETE){setTimeout(function(){ag.startUpload()},ag.upload_delay)}else{if(ak.filestatus==SWFUpload.FILE_STATUS.ERROR){Fai.ing(Fai.format(LS.siteFormSubmitFileUploadSvrBusy,Fai.encodeHtml(ak.name)))}}},upload_start_handler:function(ak){Fai.enablePopupWindowBtn(0,"save",false);Fai.ing(LS.siteFormSubmitFileUploadPrepare,false)},view_progress:function(ak,an,am,al){Fai.ing(LS.siteFormSubmitFileUploadIng+al+"%",false)}};ag=SWFUploadCreator.create(ab)}}function o(ag,ac,ah,Z){if(ag=="upload"){var W=ac.id;var ae=ac.name;var U=ac.type;var ab=ac.size;var aa=ac.path;var V=ac.createTime;var S=ac.groupId;var X="";var T=100;var ad=100;var Y=ac.fileId;var af=z("#bookingUploadFile_"+Z);z("#bookingUploadDESC_"+Z).hide();af.css("display","inline-block");af.html(ae);af.attr("_tmpFileId",W).attr("_tmpFileName",ae).attr("title",ae).attr("_fileId",Y)}}function R(S){var T=[];T.push("pid="+E);T.push("&cmd=getPanelData");T.push("&_colId="+Fai.top._colId);T.push("&_extId="+Fai.top._extId);z.ajax({type:"get",cache:false,url:Site.genAjaxUrl("booking_h.jsp?")+T.join(""),error:function(){Fai.ing("服务繁忙，请稍候重试",false)},success:function(V){var U=z.parseJSON(V);if(U.success){m=U.pageData;L=m.css;p=m.moduleInfo;if(Fai.top._manageMode){x=m.itemList}P();k()}else{Fai.ing("获取数据失败",false)}}})}function q(){var ao=m.contentList,ar=m.Def_LIMIT_INPUT_MAXLENTH,Y=m.Def_LIMIT_TEXTAREA_MAXLEN,ad=[],aq=[],ah=true;if(ao.length<1){return}for(var ai=0;ai<ao.length;ai++){var at=ao[ai];id=at.id,name=at.name,must=at.must,type=at.type,size=at.size,openAreaCode=at.openAreaCode,tmpItemContentList={id:id,type:type,must:must};if(type==0){var am=z.trim(z("#bookingSingleText_"+id).val());if(must&&am==""){H(Fai.format(LS.siteFormSubmitInputIsEmpty,Fai.encodeHtml(name)));ah=false;return false}if(am.length>ar){H(Fai.format(LS.siteFormSubmitInputMaxLength,Fai.encodeHtml(name),ar));ah=false;return false}tmpItemContentList.val=am}else{if(type==1){var T=z.trim(z("#bookingMultLine_"+id).val());if(must&&T==""){H(Fai.format(LS.siteFormSubmitInputIsEmpty,Fai.encodeHtml(name)));ah=false;return false}if(T.length>Y){H(Fai.format(LS.siteFormSubmitInputMaxLength,Fai.encodeHtml(name),Y));ah=false;return false}tmpItemContentList.val=T}else{if(type==2){if(must&&z("input[name=radioR_"+id+"]:checked").length==0){H(Fai.format(LS.siteFormSubmitCheckIsEmpty,Fai.encodeHtml(name)));ah=false;return false}if(z("input[name=radioR_"+id+"]:checked").length>0){tmpItemContentList.val=z("input[name=radioR_"+id+"]:checked").first().val()}else{tmpItemContentList.val=""}}else{if(type==3){if(must&&z("input[name=radioC_"+id+"]:checked").length==0){H(Fai.format(LS.siteFormSubmitCheckIsEmpty,Fai.encodeHtml(name)));ah=false;return false}var ag=[];z("input[name=radioC_"+id+"]:checked").each(function(au,av){ag.push(z(this).val())});tmpItemContentList.val=ag.join("\n")}else{if(type==4){var S=z("#dropDownSelect_"+id+" option:selected").val();if(!r){S=z("#dropDownNewSelect_"+id).find(".f-select-text").attr("value")}tmpItemContentList.val=S}else{if(type==5){continue}else{if(type==6){var am=z("#bookingDate_"+id).val(),W=at.dateSetting?at.dateSetting.type:0,ab=W==1?z("#bookingDate_"+id+"_end").val():"";if(must&&am==""){H(Fai.format(LS.siteFormSubmitCheckIsEmpty,Fai.encodeHtml(name)));ah=false;return false}if(must&&W==1&&ab==""){H(Fai.format(LS.siteFormSubmitCheckIsEmpty,Fai.encodeHtml(name)));ah=false;return false}if(W==1){if(z.trim(am)||z.trim(ab)){am=am+" 至 "+ab}else{am=""}}tmpItemContentList.val=am}else{if(type==7){var V=z("#bookingUploadFile_"+id);var al={};if(must&&V.attr("_tmpFileId")==""){H(Fai.format(LS.siteFormSubmitCheckHasFileUpload,Fai.encodeHtml(name)));ah=false;return false}if(V.attr("_tmpFileId")==""){tmpItemContentList.val=""}else{tmpItemContentList.val=V.attr("_fileId");al.tmpFileName=V.attr("_tmpFileName");al.fileId=tmpItemContentList.val;al.tmpFileId=V.attr("_tmpFileId");aq.push(al)}}else{if(type==8){var an=z("#bookingPhoneNum_"+id).val();if(must&&an==""){H(Fai.format(LS.siteFormSubmitInputIsEmpty,Fai.encodeHtml(name)));ah=false;return false}if(must&&!Fai.isNationMobile(an)){H(Fai.format(LS.memberProfileItemCorrect,Fai.encodeHtml(name)));ah=false;return false}if(openAreaCode){var U="";if(r){U=z("#phoneSelect_"+id).val()}else{U=z("#phoneNewSelect_"+id).find(".f-select-text").attr("value")}if(z.trim(an)){tmpItemContentList.val=U+an}else{tmpItemContentList.val=""}}else{tmpItemContentList.val=an}}else{if(type==9){var aj=z("#bookingMailInput_"+id).val();if(must&&aj==""){H(Fai.format(LS.siteFormSubmitInputIsEmpty,Fai.encodeHtml(name)));ah=false;return false}if(must&&!Fai.isEmail(aj)){H(Fai.format(LS.memberSignupUserAddItemCorrect,Fai.encodeHtml(name)));ah=false;return false}tmpItemContentList.val=aj}else{if(type==10){var ae=z("#bookingIdentityInput_"+id).val();if(must&&ae==""){H(Fai.format(LS.siteFormSubmitInputIsEmpty,Fai.encodeHtml(name)));ah=false;return false}if(must&&!Fai.isCardNo(ae)){H(Fai.format(LS.memberSignupUserAddItemCorrect,Fai.encodeHtml(name)));ah=false;return false}tmpItemContentList.val=ae}else{if(type==11){var ac=z("#proSelect_"+id).find("option:selected").attr("value");var ak=z("#citySelect_"+id).find("option:selected").attr("value");var ap=z("#countySelect_"+id).find("option:selected").attr("value");var X=z("#proSelect_"+id).find("option:selected").attr("_val");var Z=z("#citySelect_"+id).find("option:selected").attr("_val");var aa=z("#countySelect_"+id).find("option:selected").attr("_val");if(!r){ac=z("#proNewSelect_"+id).find(".f-select-text").attr("value");ak=z("#cityNewSelect_"+id).find(".f-select-text").attr("value");ap=z("#countyNewSelect_"+id).find(".f-select-text").attr("value");X=z("#proNewSelect_"+id).find(".f-select-text").text();Z=z("#cityNewSelect_"+id).find(".f-select-text").text();aa=z("#countyNewSelect_"+id).find(".f-select-text").text()}if(must&&(ac=="-1"||ak=="-1")){H(Fai.format(LS.siteFormSubmitInputIsEmpty,Fai.encodeHtml(name)));ah=false;return false}X=ac==-1?"":X;Z=ak==-1?"":Z;aa=ap==-1?"":aa;tmpItemContentList.val=X+Z+aa}}}}}}}}}}}}ad.push(tmpItemContentList)}var af=z("#bookingVolidationCode").val();if(m.validation&&af==""){H(Fai.format(LS.siteFormSubmitInputIsEmpty,LS.loginDialogCaptcha));ah=false;return false}if(!ah){return false}H(LS.siteFormSubmitIng);if((typeof(z(l).data("bookingHasCommit"))=="undefined")||z(l).data("bookingHasCommit")==false){z(l).data("bookingHasCommit",true);z.ajax({type:"post",url:"ajax/booking_h.jsp",data:"cmd=add&pid="+m.pid+"&validateCode="+af+"&submitContentList="+Fai.encodeUrl(z.toJSON(ad))+"&tmpFileList="+Fai.encodeUrl(z.toJSON(aq)),error:function(){z(l).data("bookingHasCommit",false);K(false)},success:function(au){z(l).data("bookingHasCommit",false);au=z.parseJSON(au);if(au.success){var av=p[m.Def_BookingSubmit_JUMP_URL];setTimeout(function(){av.lt==1?(function(){Fai.top.location.href=p.jumpToUrl})():Fai.top.location.reload();J()},2500);K(true,"",2000)}else{if(au.rt==-401){K(false,au.msg);z(".validateInputAndCode #bookingVolidationCode").val("");z(".validateInputAndCode .voteCodePic").trigger("click")}else{if(au.rt==-4){K(false,LS.bookingSubmitFullTips)}else{if(au.rt==-7){K(false,LS.siteImgFull)}else{if(au.rt==-2){K(false,LS.argsError)}else{K(false,LS.memberLoginError)}}}}}}})}}function H(V){var U=F.dom;U.bookingPanelMsg.html(V);var T=U.content.width(),S=U.bookingPanelMsg.width();U.bookingPanelMsg.css("left",(T-S)/2+"px");U.bookingPanelMsg.show();setTimeout(function(){U.bookingPanelMsg.hide()},3000)}function K(T,W,S){var U={htmlContent:Site.getDialogContent(false,Fai.format(W?W:LS.siteFormSubmitError)),width:205,height:78};if(T){var V=[];V.push("<div class='booking-sweet-alert' style='margin-top: 50px;'>");V.push("	<div class='sa-icon sa-success animate'>");V.push("		<span class='sa-line sa-tip animateSuccessTip'></span>");V.push("		<span class='sa-line sa-long animateSuccessLong'></span>");V.push("		<div class='sa-placeholder'></div>");V.push("		<div class='sa-fix'></div>");V.push("	</div>");V.push("	<div class='submitSuccessTitle'>"+LS.siteFormSubmitOk+"</div>");V.push("</div>");U={htmlContent:V.join(""),width:500,height:320,autoClose:S||0}}Site.popupBox(U)}function Q(){if(r){z(".proSelect").change(function(){var S=z(this).attr("_contentId");var U=z(this).val();var V=[];if(I){V=site_cityUtil.getCities(U)}else{V=site_cityUtil.getCitiesEn(U)}var T=[];T.push("<option _val='-1' value='-1'>"+m.siteFormPleaseSelect+"</option>");z.each(V,function(W,X){if(I){T.push("<option _val='"+X.name+"' value='"+X.id+"'>"+site_cityUtil.simpleCityNameStr(X.name)+"</option>")}else{T.push("<option _val='"+X.name+"' value='"+X.id+"'>"+site_cityUtil.simpleCityNameStrEn(X.name)+"</option>")}});z("#citySelect_"+S).removeAttr("disabled").html(T.join(""))});z(".citySelect").change(function(){var T=z(this).attr("_contentId");var V=z(this).val();var S=[];if(I){S=site_cityUtil.getCounty(V)}else{S=site_cityUtil.getCountyEn(V)}var U=[];U.push("<option _val='-1' value='-1'>"+m.siteFormPleaseSelect+"</option>");z.each(S,function(W,X){if(I){U.push("<option _val='"+X.name+"' value='"+X.id+"'>"+site_cityUtil.simpleCityNameStr(X.name)+"</option>")}else{U.push("<option _val='"+X.name+"' value='"+X.id+"'>"+site_cityUtil.simpleCityNameStrEn(X.name)+"</option>")}});z("#countySelect_"+T).removeAttr("disabled").html(U.join(""))})}}function C(){if(r){return}var T=[];z.each(m.mobileCtNameList,function(U,V){T.push({content:(V.ctShowName+V.ctCode),value:V.ctName})});var S=0;z(T).each(function(U,V){if(V.value==m.memberMobileCt){S=U}});z.each(m.contentList,function(Y,V){var U=V.id,aa=V.type,ab=V.input;if(aa==m.Def_ContentList_Type_PHONE&&V.openAreaCode){c({container:z("#phoneNewSelect_"+U),widgetClass:"phoneCode",id:"phoneNewSelect",checkIndex:(V.sys?S:0),width:120,selectList:T,onchange:function(){}})}else{if(aa==m.Def_ContentList_Type_DROPDOWN){var W=[];var Z=ab.split("\n");z.each(Z,function(ae,af){W.push({content:af,value:af})});c({container:z("#dropDownNewSelect_"+U),widgetClass:"drowDown",id:"dropDownNewSelect_",checkIndex:0,width:120,selectList:W,onchange:function(){}})}else{if(aa==m.Def_ContentList_Type_ADDRESS){var ac;if(I){ac=site_cityUtil.getProvince()}else{ac=site_cityUtil.getProvinceEn()}var X=[];X.push({content:m.siteFormPleaseSelect,value:-1});z.each(ac,function(ae,af){X.push({content:af.name,value:af.id})});var ad=c({container:z("#proNewSelect_"+U),widgetClass:"proAddr",id:"proNewSelect",checkIndex:0,width:120,selectList:X,onchange:function(){z("#countyNewSelect_"+U).empty();c({container:z("#countyNewSelect_"+U),widgetClass:"cityAddr",id:"countyNewSelect_",checkIndex:0,width:120,selectList:[{content:m.siteFormPleaseSelect,value:-1}],enable:true,onchange:function(){}});var ah;var ag=ad.getValue();if(I){ah=site_cityUtil.getCities(ag)}else{ah=site_cityUtil.getCitiesEn(ag)}var ae=[];ae.push({content:m.siteFormPleaseSelect,value:-1});z.each(ah,function(ai,aj){ae.push({content:aj.name,value:aj.id})});z("#cityNewSelect_"+U).empty();var af=c({container:z("#cityNewSelect_"+U),widgetClass:"cityAddr",id:"cityNewSelect",checkIndex:0,width:120,selectList:ae,onchange:function(){var ai;var ak=af.getValue();if(I){ai=site_cityUtil.getCounty(ak)}else{ai=site_cityUtil.getCountyEn(ak)}var aj=[];aj.push({content:m.siteFormPleaseSelect,value:-1});z.each(ai,function(al,am){aj.push({content:am.name,value:am.id})});if(V.openMunicipalCode){z("#countyNewSelect_"+U).empty();c({container:z("#countyNewSelect_"+U),widgetClass:"cityAddr",id:"countyNewSelect_",checkIndex:0,width:120,selectList:aj,onchange:function(){}})}}})}});c({container:z("#cityNewSelect_"+U),widgetClass:"cityAddr",id:"cityNewSelect",checkIndex:0,width:120,selectList:[{content:m.siteFormPleaseSelect,value:-1}],enable:true,onchange:function(){}});c({container:z("#countyNewSelect_"+U),widgetClass:"cityAddr",id:"countyNewSelect_",checkIndex:0,width:120,selectList:[{content:m.siteFormPleaseSelect,value:-1}],enable:true,onchange:function(){}})}}}})}function O(){if(r){return}z(l).off("click.nradio").on("click.nradio",".jz-radio",function(){var S=z(this).attr("inputName");z(".R_"+S).removeClass("jz-radio-checked");z(this).find("input[name="+S+"]").attr("checked",false);z(this).addClass("jz-radio-checked");z(this).find(".jz-radio-input").attr("checked",true)})}function n(){O();Q();C();Site.siteFormTimeBtn(t);if(Fai.top._manageMode){z(".fileUploadBtn").click(function(){H("当前为管理态状态，文件上传无效")});z("#bookingSubmitBtn .s_ibutton").click(function(){H("当前为管理态状态，提交无效")});D()}else{z.each(g,function(T,S){A(S)});z("#bookingSubmitBtn .s_ibutton").click(function(){q()})}if(Fai.top.$("#fk-bookingSubmitPanel f-innerContent>.mCustomScrollbar").length<1){Fai.top.$("#fk-bookingSubmitPanel .tableWrap").mCustomScrollbar({theme:"fk-gray",advanced:{updateOnContentResize:true},axis:"y"})}}function D(){var T=F.dom.content;if(T.length<0){return}if(F.dom.content.find(".J_resizableTip").length>0){return}var S="<div class='ui-resizable-handle ui-resizable-e funPanelResizeHandle' _dir='0' style='z-index: 1000;'></div><div class='ui-resizable-handle ui-resizable-w funPanelResizeHandle' _dir='1' style='z-index: 1000;'></div><div class='ui-resizable-handle ui-resizable-s funPanelResizeHandle' _dir='2' style='z-index: 1000;'></div><div class='ui-resizable-handle ui-resizable-n funPanelResizeHandle' _dir='3' style='z-index: 1000;'></div>";T.append(z(S));T.append("<a href='javascript:;' class='J_resizableTip ui-resizable-cancelTip fk-resizable-cancelTip "+(y==M&&d==s?"J_resizableTipHide":"")+"' id='J_resizableTip_44' style='z-index:9999;' _faiscoTip='还原默认宽度和高度'></a>");F.dom.content.find(".J_resizableTip").click(function(){var W=(Fai.top.$("body").width()-d)/2;W=W<0?0:W;var V=(Fai.top.$("body").height()-y)/2;V=V<0?0:V;F.dom.content.css({width:+d,height:y,left:W,top:V});F.dom.content.find("#tableWrap").css("height",(y-110));z(this).hide();U(d,y)});T.children(".ui-resizable-handle").off("mousedown.pzresize").on("mousedown.pzresize",function(X){if(X.button!=0){return}var W={clientX:X.clientX,clientY:X.clientY},V=T.width();startHeight=T.height();handle=z(this),documentElem=z(document);direction=parseInt(handle.attr("_dir"));documentElem.off("mousemove.pzresize").on("mousemove.pzresize",function(ac){z("#fk-moduleToolbar44").hide();F.dom.content.find(".J_resizableTip").hide();var Y={clientX:ac.clientX,clientY:ac.clientY},ad=0,ab=T.width();resizeHeight=T.height();switch(direction){case 0:ad=parseInt(Y.clientX-W.clientX);ab=V+(ad*2);break;case 1:ad=parseInt(Y.clientX-W.clientX);ab=V-(ad*2);break;case 2:ad=parseInt(Y.clientY-W.clientY);resizeHeight=startHeight+(ad*2);break;case 3:ad=parseInt(Y.clientY-W.clientY);resizeHeight=startHeight-(ad*2);break;default:}ab=ab<450?450:ab;resizeHeight=resizeHeight<100?100:resizeHeight;if(direction<2){var aa=(Fai.top.$("body").width()-ab)/2;aa=aa<=20?20:aa;if(aa>20){T.css("width",ab);F.dom.content.css("left",aa)}}else{if(direction<4){var Z=(Fai.top.$("body").height()-resizeHeight)/2;Z=Z<=20?20:Z;if(Z>20){T.css("height",resizeHeight);F.dom.content.find("#tableWrap").css("height",(resizeHeight-110));F.dom.content.css("top",Z)}}}});documentElem.off("selectstart.pzsel").on("selectstart.pzsel",function(){return false});documentElem.off("mouseup.pzresize").on("mouseup.pzresize",function(Y){documentElem.off("mousemove.pzresize").off("mouseup.pzresize").off("selectstart.pzsel");U(T.width(),T.height())})});function U(W,V){var X={};X.w=W;X.h=V;z.ajax({type:"get",cache:false,url:Site.genAjaxUrl("module_h.jsp?")+"cmd=set&id=44&style=104&pattern="+Fai.encodeUrl(JSON.stringify(X)),error:function(){Fai.ing("服务繁忙，请稍候重试",false)},success:function(Z){var Y=jQuery.parseJSON(Z);if(Y.success){s=W;M=V;if(y==M&&d==s){F.dom.content.find(".J_resizableTip").addClass("J_resizableTipHide")}else{F.dom.content.find(".J_resizableTip").removeClass("J_resizableTipHide")}}else{Fai.ing(Y.msg,false)}}})}}function f(){var T=F.dom,S=T.panel,U=T.panelBtn;U.close.click(function(){J()});T.contentBg.click(function(){J()});T.panel.on("mousewheel DOMMouseScroll",function(V){return false})}function a(){var S=F.dom;if(Fai.top.$(".J_popup_bg").length>1){S.contentBg.css("opacity",".15")}}function B(S){var T=F.dom;T.panel=Fai.top.$("#fk-bookingSubmitPanel");T.content=T.panel.find(l);T.contentBg=T.panel.find(".J_contentBg");T.bookingPanelMsg=T.panel.find("#bookingPanelMsg");T.innerContent=T.panel.find("#f-innerContent");T.tableWrap=T.panel.find("#tableWrap");T.panelBtn={};T.panelBtn.close=T.panel.find(".J_close");if(typeof S.eventFunc=="function"){setTimeout(function(){S.eventFunc.apply(F,arguments)},30)}if(typeof S.styleFunc=="function"){setTimeout(function(){S.styleFunc.apply(F,arguments)},30)}}function k(){N({func:function(){var S=F.dom;if(S.panel&&S.panel.length>0){if(S.panel.is(":hidden")){S.panel.show()}}else{Fai.top.$("#fk-bookingSubmitPanel").show()}}});if(Fai.top._manageMode&&x&&x.length>0){jzUtils.run({name:"moduleEditTool.init",callMethod:true},{id:44,isDialog:true,toolList:x})}}function J(){G();E=0;Fai.top.$("#fk-bookingSubmitPanel").find(".J_content").trigger("mouseleave.moduleEdit").end();var S=document.getElementById("fk-bookingSubmitPanel");if(S!=null){S.parentNode.removeChild(S)}}function G(){L="";x=[];t=[];g=[];m={}}F.init=function(S){J();var T=JSON.parse(S);E=T.pid;M=M==0?T.panelHeight:M;s=s==0?T.panelWidth:s;Fai.top.$("body").append(w().join(""));B({eventFunc:f,styleFunc:a});R()};F.refresh=function(){F.dom.innerContent.empty();G();R()};function N(S){if(Fai.top.$("link[href='"+L+"']").length<1&&z.trim(L).length>0){Site.demandLoadCss(L,function(){if(typeof S.func=="function"){S.func.apply(F,arguments)}})}else{if(typeof S.func=="function"){S.func.apply(F,arguments)}}}})(jQuery,Site.bookingSubmitPanel);