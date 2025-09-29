document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // 名前ﾊﾞﾘﾃﾞｰｼｮﾝ関数
  function validateName(input) {
    const value = input.value.trim();
    const errorElement = input.nextElementSibling;

    if (errorElement) {
      errorElement.remove();
    }

    if (!value) {
      showError(input, `入力してください。`);
      return false;
    }
    // Check for English only + no spaces + 8+ characters
    if (/^[a-zA-Z\s]+$/.test(value) && value.length >= 8) {
      showError(input, `不正な文字列です。`);
      return false;
    }
    return true;
  }

  // 会社名ﾊﾞﾘﾃﾞｰｼｮﾝ関数
  function validateCompany(input) {
    const value = input.value.trim();
    const errorElement = input.nextElementSibling;

    if (errorElement) {
      errorElement.remove();
    }

    if (!value) {
      showError(input, `入力してください。`);
      return false;
    }
    // Check for English only + no spaces + 8+ characters
    if (/^[a-zA-Z\s]+$/.test(value) && value.length >= 8) {
      showError(input, `不正な文字列です。`);
      return false;
    }
    return true;
  }

  // ﾒｰﾙｱﾄﾞﾚｽ ﾊﾞﾘﾃﾞｰｼｮﾝ関数
  function validateEmail(input) {
    const value = input.value.trim();
    const errorElement = input.nextElementSibling;

    if (errorElement) {
      errorElement.remove();
    }

    if (!value) {
      showError(input, `入力してください。`);
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      showError(input, "メールアドレスの形式が正しくありません。");
      return false;
    }
    return true;
  }

  // 電話番号 ﾊﾞﾘﾃﾞｰｼｮﾝ関数
  function validatePhone(input) {
    const value = input.value.trim();
    const errorElement = input.nextElementSibling;

    if (errorElement) {
      errorElement.remove();
    }

    if (!value) {
      showError(input, `入力してください。`);
      return false;
    }
    if (!/^[0-9]{10,11}$/.test(value)) {
      showError(input, "電話番号はハイフン無し英数字のみで入力してください。");
      return false;
    }
    return true;
  }

  function showError(input, message) {
    input.classList.add("form-group__input--error");
    // inputにform-group__input--errorというｸﾗｽを追加
    const errorSpan = document.createElement("span");
    // span要素を生成して代入
    errorSpan.className = "error_message";
    // cssでｴﾗｰ用のｽﾀｲﾙが適用できるようになる その要素のclass属性がerror_messageになる
    errorSpan.textContent = message;
    // 関数の引数で与えたﾒｯｾｰｼﾞ内容がspanの中に表示される 要素の中にそのﾃｷｽﾄが表示される

    input.insertAdjacentElement("afterend", errorSpan);
    // insertAdjacentElement(position, element)
    // afterend:要素のすぐ後
    // element:挿入したい要素
  }

  // ﾌﾟﾗｲﾊﾞｼｰﾎﾟﾘｼｰ同意 ﾊﾞﾘﾃﾞｰｼｮﾝ関数
  function validatePrivacyCheckbox(input) {
    input.classList.add("form-group__input--error");
    const container = input.closest(".checkbox_text_content_flex");
    const errorElement = container.nextElementSibling;

    if (errorElement && errorElement.classList.contains("privacy_error_message")) {
      errorElement.remove();
    }

    if (!input.checked) {
      privacyShowError(container, "プライバシーポリシーへの同意は必須です。");
      return false;
    } else {
      input.classList.remove("form-group__input--error");
    }
    return true;
  }

  function privacyShowError(container, message) {
    const errorSpan = document.createElement("span");
    errorSpan.className = "privacy_error_message";
    errorSpan.textContent = message;
    container.insertAdjacentElement("afterend", errorSpan);
  }

  const nameInput = form.querySelector('input[name="name"]');
  const companyInput = form.querySelector('input[name="company"]');
  const emailInput = form.querySelector('input[name="email"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const privacyInput = form.querySelector('input[name="privacy"]');

  nameInput.addEventListener("input", function () {
    validateName(this);
  });
  companyInput.addEventListener("input", function () {
    validateCompany(this);
  });
  emailInput.addEventListener("input", function () {
    validateEmail(this);
  });
  phoneInput.addEventListener("input", function () {
    validatePhone(this);
  });
  privacyInput.addEventListener("change", function () {
    validatePrivacyCheckbox(this);
  });

  // フォーム送信時のバリデーション
  form.addEventListener("submit", function (e) {
    let valid = true;
    if (!validateName(nameInput)) {
      valid = false;
    }

    if (!validateCompany(companyInput)) {
      valid = false;
    }

    if (!validateEmail(emailInput)) {
      valid = false;
    }

    if (!validatePhone(phoneInput)) {
      valid = false;
    }

    if (!validatePrivacyCheckbox(privacyInput)) {
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    }
  });
});
