function skillsMember() {
  var member = document.getElementById('member');
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var memberSkill = document.getElementById('memberSkill');
  memberSkill.value = memberText;
  var memberSkillValue = document.getElementById('memberSkillValue');
  memberSkillValue.value = memberValue;
  var memberSkillForm = document.getElementById('memberSkillForm');
  memberSkillForm.submit();
}
