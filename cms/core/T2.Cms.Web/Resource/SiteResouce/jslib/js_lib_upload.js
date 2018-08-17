﻿//
//文件：上传插件
//版本: 1.0
//时间：2013-10-01
//
function fileUpload(h, i) { this.id = h.id; this.infopanel = h.info ? document.getElementById(h.info) : null; this.processID = Math.random() * 100 + 100; this.debug = h.debug || false; this.uploadurl = h.url, this.processurl = h.processurl, this.filename = null; this.file = null; this.repeatSelect = h.repeatSelect == undefined ? false : h.repeatSelect; this.btnText = ''; this.btnClicked = false; this.repeatSelect = false; var j = document.getElementById(this.id); this.btnText = j.innerHTML || '选择文件'; j.innerHTML = ''; var k, __html_form, __html_up_btn, __html_process, __html_msg_panel; try { k = document.createElement('<IFRAME name="' + (this.id + '_iframe') + '">') } catch (ex) { k = document.createElement('IFRAME'); k.setAttribute('name', this.id + '_iframe') } j.appendChild(k); if (!this.debug) { k.style.display = 'none' } var l = (function (t, g) { return function () { var a = g.contentWindow.document; var b = ''; try { var c = a.getElementsByTagName('HEAD'); if (c.length != 0) { b = c[0].innerHTML } } catch (exc) { t.onUploadComplete.apply(t, [false, exc]); return } if (b) { var d = /<title>(.+?)<\/title>/.exec(b); if (d) { d = d[1]; t.onUploadComplete.apply(t, [false, d, a]); return } } var e = a.body.innerHTML; var f = e; if (e == '') return; e = /{[\s\S]*}/igm.exec(e); if (e) { f = jr.toJson(e) } t.onUploadComplete.apply(t, [true, f, a]) } })(this, k); jr.event.add(k, 'load', l); __html_form = document.createElement('FORM'); __html_form.setAttribute('id', this.id + '_form'); __html_form.method = 'POST'; __html_form.style.cssText = 'display:inline'; __html_form.className = 'ui-uploadform'; __html_form.action = this.uploadurl; __html_form.enctype = 'multipart/form-data'; __html_form.encoding = 'multipart/form-data'; __html_form.target = k.getAttribute('name'); j.appendChild(__html_form); __html_up_btn = document.createElement("span"); __html_up_btn.className = 'upbtn'; __html_up_btn.innerHTML = this.btnText; __html_form.appendChild(__html_up_btn); this.file = document.createElement('INPUT'); this.file.setAttribute('type', 'file'); this.file.setAttribute('name', this.id); this.file.setAttribute('tabindex', '9999'); var m = __html_up_btn.offsetTop; var n = this.debug ? 50 : 0; this.file.style.cssText = 'opacity:' + (n / 100) + ';filter:alpha(opacity=' + n + ');cursor:normal;position:absolute;top:' + __html_up_btn.offsetTop + 'px;left:' + __html_up_btn.offsetLeft + 'px;z-index:101;width:' + __html_up_btn.offsetWidth + 'px;height:' + __html_up_btn.offsetHeight + 'px;'; if (this.repeatSelect) this.file.onclick = function () { this.value = '' }; __html_form.appendChild(this.file); __html_process = document.createElement('INPUT'); __html_process.setAttribute('name', 'upload_process'); __html_process.setAttribute('type', 'hidden'); __html_process.setAttribute('value', this.id + '|' + this.processID); __html_form.appendChild(__html_process); this.filename = this.file.value; setInterval((function (t) { return function () { if (t.file.value != '' && t.filename != t.file.value) { t.filename = t.file.value; t.onFileChanged(t.file) } } })(this), 100) } fileUpload.prototype.printf = function (a) { if (this.infopanel) this.infopanel.innerHTML = a }; fileUpload.prototype.checkFileTypes = function (a) { var b = this.file.value; var c = b.substring(b.lastIndexOf('.')); return new RegExp('\\*' + c + ';*', 'i').test(a) }; fileUpload.prototype.onFileChanged = function (a) { }; fileUpload.prototype.onUploading = function (a) { }; fileUpload.prototype.onUploadComplete = function (a, b, c) { }; fileUpload.prototype.upload = function () { var a = document.forms[this.id + '_form']; if (a) { a.submit(); if (this.onUploading) this.onUploading() } }; function fileUploadObject(d, e) { var f = new fileUpload(d); var g = document.getElementById(f.id).getElementsByTagName('SPAN')[0]; f.onUploading = function (a) { f.file.setAttribute('disabled', 'disabled'); try { g.innerHTML = '上传中' } catch (ex) { } }; f.onUploadComplete = function (a, b, c) { f.file.removeAttribute('disabled'); try { g.innerHTML = f.btnText } catch (ex) { } if (e) { e(a, b, c) } }; f.onFileChanged = function (a) { if (d.exts && !f.checkFileTypes(d.exts)) { alert('文件类型不允许上传,仅允许上传文件类型为：' + d.exts) } else { f.upload() } }; return f } jr.extend({ upload: function (a, b) { return fileUploadObject(a, b) } });
