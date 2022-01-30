<template>
  <div class="project-box">
      <div v-show="editPost" class="icons">
          <div @click="editProject" class="icon">
              <Edit class="icon" />
          </div>
          <div @click="deleteProject" class="icon">
              <Delete class="icon" />
          </div>
      </div>
      <img src="../assets/dummy-project-box.jpg" alt="">
      <div class="info">
          <h4>Project Title</h4>
          <h6>Posted on: dd/mm/yyyy</h6>
          <router-link class="link" to="#">
              View Project
              <Arrow class="arrow" />
          </router-link>
      </div>
  </div>
</template>

<script>
import Arrow from "../assets/icons/arrow.svg";
import Edit from "../assets/icons/edit.svg";
import Delete from "../assets/icons/delete.svg";

export default {
  name: "projectBox",
  props: ["post"],
  components: {
    Arrow,
    Edit,
    Delete,
  },
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post.projectID);
    },
    editProject() {
      this.$router.push({ name: "EditProject", params: { projectid: this.post.projectID } });
    },
  },
  computed: {
    editPost() {
      return this.$store.state.editPost;
    },
  },
};
</script>

<style>

</style>