@echo off
title Insane Auto Dueler Set-Up

:S1Token
	if exist utils\slave1token.json goto S2Token
	set /p Token1=Enter Slave 1's Token:
	@echo "%Token1%" > utils\slave1token.json
	@cls
:S2Token
	if exist utils\slave2token.json goto MasterID
	set /p Token2=Enter Slave 2's Token:
	@echo "%Token2%" > utils\slave2token.json
	@cls
:MasterID
	if exist utils\masterID.json goto ChannelID
	set /p MasterID=Enter Master ID:
	@echo "%MasterID%" > utils\masterID.json
	@cls
:ChannelID
	if exist utils\channelID.json goto PCCommand
	set /p ChannelID=Enter Channel ID:
	@echo "%ChannelID%" > utils\channelID.json
	@echo %ChannelID% > utils\channelID2.json
	@cls
:PCCommand
	choice /c yn /m "Are You Using The Default Command Prefix (p!)?"
	if errorlevel 2 cls &goto CPSCommand
	if errorlevel 1 cls &goto Start
:CPSCommand
	set /p Command=Enter Custom Prefix:
	@echo "%Command%" > utils\prefix.json
	@cls
:Start
	@echo @echo off > run.bat
	@echo title Insane Auto Dueler >> run.bat
	@echo node autodueler.js >> run.bat
	@echo pause >> run.bat
	start run.bat
	del /q  first-run.bat
	exit /b