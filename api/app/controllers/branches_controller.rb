class BranchesController < ApplicationController
  before_action :set_branch, only: [:show, :update, :destroy]

  # GET /branches
  def index
    @branches = Branch.all

    render json: @branches
  end

  # GET /branches/1
  def show
    render json: @branch
  end

  # POST /branches
  def create
    @branch = Branch.new(branch_params)

    if @branch.save
      render json: @branch, status: :created, location: @branch
    else
      render json: @branch.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /branches/1
  def update
    if @branch.update(branch_params)
      render json: @branch
    else
      render json: @branch.errors, status: :unprocessable_entity
    end
  end

  # DELETE /branches/1
  def destroy
    @branch.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_branch
      @branch = Branch.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def branch_params
      params.require(:branch).permit(:num, :name, :bank_id)
    end
end
