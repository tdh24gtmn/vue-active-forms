<template>
  <v-form ref="form" v-model="valid" v-bind="inputsObject">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="inputsObject[0].firstname"
          :rules="nameRules"
          :append-icon="greenCheckIcon"
          label="First name"
          required
        ></v-text-field>
        <!-- <v-switch v-model="valid" class="ma-4" label="Valid" readonly></v-switch> -->
        <!-- <v-text-field
          v-model="inputsObject[0].email"
          :rules="emailRules"
          :append-icon="greenCheckIcon"
          label="E-mail ID"
          required
        ></v-text-field>
        <v-select
          v-model="inputsObject[0].select"
          :items="items"
          :rules="[v => !!v || 'Обязательное поле']"
          :append-icon="changeIcon"
          label="Country"
          required
        ></v-select>
        <v-text-field
          v-model="inputsObject[0].phone"
          :rules="phoneRules"
          label="Phone number"
          placeholder="380XXXXXXXXX"
          :append-icon="greenCheckIcon"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="inputsObject[0].lastname"
          :rules="nameRules"
          :append-icon="greenCheckIcon"
          label="Last name"
          required
        ></v-text-field>
        <v-text-field
          v-model="inputsObject[0].userId"
          :rules="userIdlRules"
          :append-icon="iconChange"
          label="Your User ID"
          required
        ></v-text-field>
        <v-row>
          <v-col cols="12" md="6" class="colPadding">
            <v-select
              v-model="inputsObject[0].selectState"
              :items="state"
              :rules="[v => !!v || 'Обязательное поле']"
              :append-icon="changeIcon"
              label="State"
              required
            ></v-select>
          </v-col>
          <v-col cols="12" md="6" class="colPadding">
            <v-select
              v-model="inputsObject[0].selectCity"
              :items="city"
              :rules="[v => !!v || 'Обязательное поле']"
              :append-icon="changeIcon"
              label="City"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-text-field
          v-model="inputsObject[0].code"
          :rules="codeRules"
          label="Reference Code"
          id="textUpperCase"
          :append-icon="greenCheckIcon"
          @click="toUpperCase"
          class="colPadding"
        ></v-text-field>-->
      </v-col>
    </v-row>
    <div class="line"></div>
    <div class="flex-between">
      <v-btn text rounded class="reset-btn" @click="reset" v-on:click="changeIcons">Reset All</v-btn>
      <v-btn :rounded="true" :color="color" :disabled="!valid" @click="validate">Continue</v-btn>
    </div>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    inputsObject: [
      {
        firstname: "",
        lastname: "",
        email: "",
        userId: "",
        select: null,
        selectState: null,
        selectCity: null,
        phone: "",
        code: ""
      }
    ],
    valueCode: "",
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Обязательное поле",
      v => /^[а-яА-ЯёЁ]+$/.test(v) || "Только кириллица",
      v =>
        (v && v.length <= 50 && v.length >= 2) ||
        "Минимум 2 символа, максимум 50"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail обязательное поле",
      v => /.+@.+\..+/.test(v) || "Валидный E-mail",
      // (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Валидный E-mail",
      v => (v && v.length <= 255) || "Email максимум 255 символов"
    ],
    userId: "",
    userIdlRules: [
      v => !!v || "User ID обязательное поле",
      v =>
        /^[a-zA-Z_]+$/.test(v) ||
        "Только латинские буквы и нижнее подчеркивание",
      v =>
        (v && v.length <= 30 && v.length >= 5) ||
        "ID минимум 5 символов, максимум 30"
    ],
    select: null,
    items: ["India", "USA", "Finland", "Germany"],
    selectState: null,
    state: ["Maharashtra", "Gujarat", "Arizona", "New York"],
    selectCity: null,
    city: ["Pune", "Ahmedabad", "Phoenix", "Buffalo"],
    phone: "",
    phoneRules: [
      v => !!v || "Обязательное поле",
      v => /^380\d{9}$/.test(v) || "380XXXXXXXXX Только цифры"
    ],
    lowCaseCode: "",
    code: "",
    codeRules: [
      v => /^[a-zA-Z0-9]+$/.test(v) || "Латинские буквы и цифры",
      v => (v && v.length == 10) || "10 символов"
    ],
    changeIcon: "mdi-chevron-down",
    color: "#48a5ea",
    colorIcon: "",
    iconChange: "mdi-lock-outline",
    greenCheckIcon: ""
  }),
  watch: {
    indexUpdate: function() {
      this.inputsObject.splice(
        0,
        1,
        this.$store.state.ValidateArray[this.$store.state.index]
      );
      // console.log(this.inputsObject);
      this.$refs.form.resetValidation();
    }
  },
  computed: {
    indexUpdate: function() {
      return this.$store.state.index;
    }
  },
  methods: {
    reset: function() {
      if (confirm("Do you really want reset this form?")) {
        this.$refs.form.reset();
      }
    },
    changeIcons: function() {
      this.changeIcon = "mdi-chevron-down";
      this.iconChange = "mdi-lock-outline";
      this.greenCheckIcon = "";
    },
    validate() {
      if (this.$refs.form.validate()) {
        // this.snackbar = true;

        // this.inputsObject[0].code = this.lowCaseCode.toLocaleUpperCase();

        // this.lowCaseCode.toLocaleUpperCase() = this.inputsObject[0].code;

        this.changeIcon = "mdi-check";
        this.iconChange = "mdi-check";
        this.greenCheckIcon = "mdi-check";

        this.$store.state.ValidateArray.splice(
          this.$store.state.index,
          1,
          this.inputsObject[0]
        );
        setTimeout(this.changeIcons, 400);

        console.log(this.$store.state.ValidateArray);

        if (this.$store.state.validateCounter < 4) {
          this.$store.state.validateCounter++;
        }

        if (this.$store.state.index < 3) {
          this.$store.state.index++;
          // console.log(this.$store.state.index);

          this.inputsObject.splice(
            0,
            1,
            this.$store.state.ValidateArray[this.$store.state.index]
          );

          this.$refs.form.resetValidation();
        }
      }
    },
    toUpperCase: function() {
      let a = document.getElementById("textUpperCase");
      a.style.textTransform = "uppercase";
    }
  }
};
</script>
<style>
.mdi-check {
  color: green !important;
}

.colPadding {
  padding-top: 0px !important;
}
.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
  font-size: 20px;
  font-family: "ProximaNova-Regular", sans-serif;
}
.v-label .v-label--active .theme--light {
  font-size: 14px;
}
.line {
  margin-top: 30px;
  margin-bottom: 40px;
  width: 100%;
  height: 1px;
  background-color: rgb(216, 216, 216);
  opacity: 0.302;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
.reset-btn {
  color: #a0a0a0 !important;
}
</style>


