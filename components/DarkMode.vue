<template>
  <div>
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
      <em>Enable Dark Mode!</em>
    </div>
  </div>
</template>

<script>
export default {
    computed: 
    {
        checked: 
        {
            get () 
            {
                return this.value.includes(this.val)
            },
            set (newVal) 
            {
              alert("Hello")
            }
        }
    },
};
</script>

<style scoped>
  .theme-switch-wrapper {
    display: flex;
    align-items: center;
    
    em {
      margin-left: 10px;
      font-size: 1rem;
    }
  }
  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }

  .theme-switch input {
    display:none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

</style>