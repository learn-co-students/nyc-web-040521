class  Api::V1::InstructorsController < ApplicationController
    before_action :find_instructor, only: [:show, :update, :destroy]

    def index
        instructors = Instructor.all
        # render json: instructors, only: [:name, :id], include: :students
        # render json: instructors, include: {students: { only: [:name]} } , only: [:name, :id]
        render json: instructors
    end

    def show
        # instructor = Instructor.find(params[:id])
        render json: @instructor #, include: {students: { only: [:name]} } , only: [:name, :id]
    end

    def create
        # byebug
        instructor = Instructor.new(instructor_params)

        if instructor.valid?
            instructor.save
            render json: instructor
        else
            render json: {message: "Not valid value", full_messages: instructor.errors.full_messages}
        end
    end

    def update
        # byebug
        # instructor = Instructor.find(params[:id])
        @instructor.update(instructor_params)
        render json: @instructor
    end

    def destroy
        @instructor.destroy
        render json: {message: "Instructor is deleted!! :( "}
    end

    private

    def find_instructor
        @instructor = Instructor.find(params[:id])
    end

    def instructor_params
        params.require(:instructor).permit(:name)
    end
end
